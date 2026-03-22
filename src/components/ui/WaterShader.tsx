import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const VERTEX = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const FRAGMENT = `
  uniform sampler2D uTexture;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uImageSize;
  varying vec2 vUv;

  vec2 coverUv(vec2 uv, vec2 resolution, vec2 imageSize) {
    float screenAspect = resolution.x / resolution.y;
    float imageAspect = imageSize.x / imageSize.y;
    vec2 scale = vec2(1.0);
    if (screenAspect > imageAspect) {
      scale.y = (imageAspect / screenAspect);
    } else {
      scale.x = (screenAspect / imageAspect);
    }
    return (uv - 0.5) * scale + 0.5;
  }

  void main() {
    vec2 uv = coverUv(vUv, uResolution, uImageSize);

    // Water region mask — strongest in center-right where water stream is,
    // fades out toward edges and top/bottom
    float waterMask = smoothstep(0.05, 0.35, uv.y) * smoothstep(0.95, 0.65, uv.y);
    waterMask *= smoothstep(0.0, 0.3, uv.x) * smoothstep(1.0, 0.7, uv.x);

    // Flowing displacement — multiple sine layers for organic feel
    float flow = uTime * 0.4;

    float dx = 0.0;
    dx += sin(uv.y * 12.0 + flow * 2.5) * 0.003;
    dx += sin(uv.y * 20.0 - flow * 1.8 + uv.x * 5.0) * 0.002;
    dx += sin(uv.y * 35.0 + flow * 3.2) * 0.001;

    float dy = 0.0;
    dy += cos(uv.x * 8.0 + flow * 1.5) * 0.004;
    dy += sin(uv.y * 15.0 + flow * 2.0 + uv.x * 3.0) * 0.003;
    dy += cos(uv.x * 25.0 - flow * 2.8) * 0.0015;

    // Apply displacement only in water region
    vec2 displaced = uv + vec2(dx, dy) * waterMask;

    // Subtle caustic shimmer
    float caustic = sin(uv.x * 40.0 + flow * 2.0) * sin(uv.y * 40.0 - flow * 1.5);
    caustic = caustic * caustic * 0.03 * waterMask;

    vec4 color = texture2D(uTexture, displaced);
    color.rgb += caustic * vec3(0.4, 0.5, 0.7);

    gl_FragColor = color;
  }
`

const IMAGE_URL =
  'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=2000&q=80'

export default function WaterShader() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    const loader = new THREE.TextureLoader()
    loader.crossOrigin = 'anonymous'

    const uniforms = {
      uTexture: { value: null as THREE.Texture | null },
      uTime: { value: 0 },
      uResolution: {
        value: new THREE.Vector2(container.clientWidth, container.clientHeight),
      },
      uImageSize: { value: new THREE.Vector2(1, 1) },
    }

    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT,
      uniforms,
    })

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material)
    scene.add(mesh)

    loader.load(IMAGE_URL, (texture) => {
      texture.minFilter = THREE.LinearFilter
      texture.magFilter = THREE.LinearFilter
      uniforms.uTexture.value = texture
      if (texture.image) {
        uniforms.uImageSize.value.set(texture.image.width, texture.image.height)
      }
    })

    let animId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animId = requestAnimationFrame(animate)
      uniforms.uTime.value = clock.getElapsedTime()
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      renderer.setSize(w, h)
      uniforms.uResolution.value.set(w, h)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      material.dispose()
      if (uniforms.uTexture.value) uniforms.uTexture.value.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="hero__water-canvas"
      aria-hidden="true"
    />
  )
}
