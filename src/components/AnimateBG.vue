<template>
    <div >
        <Particles
          id="tsparticles"
          :particlesInit="particlesInit"
       
          :options="particlesOptions"
      >

    </Particles>

    </div>
  
</template>


<script setup>
import { loadFull } from 'tsparticles';
import { computed } from 'vue';



// Load tsparticles
const particlesInit = async engine => {
  await loadFull(engine);
};



// Define particles options
const particlesOptions = computed(() => ({
  autoPlay: true,
  background: {
    color: {
      value: '#1e1e1e'
    },
    opacity: 1
  },
  backgroundMask: {
    composite: 'destination-out',
    cover: {
      color: {
        value: '#fff'
      },
      opacity: 1
    },
    enable: false
  },
  clear: true,
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  detectRetina: true,
  duration: 0,
  fpsLimit: 120,
  interactivity: {
    detectsOn: 'window',
    events: {
      onClick: {
        enable: false,
        mode: 'light'
      },
      onDiv: {
        selectors: [], // Ensure this is an array
        enable: false,
        mode: [],
        type: 'star'
      },
      onHover: {
        enable: true,
        mode: 'grab',
        parallax: {
          enable: true,
          force: 60,
          smooth: 10
        }
      },
      resize: {
        delay: 0.5,
        enable: true
      }
    },
    modes: {
      trail: {
        delay: 1,
        pauseOnStop: false,
        quantity: 1
      },
      attract: {
        distance: 200,
        duration: 0.4,
        easing: 'ease-out-quad',
        factor: 1,
        maxSpeed: 50,
        speed: 1
      },
      bounce: {
        distance: 200
      },
      bubble: {
        distance: 400,
        duration: 2,
        mix: false,
        opacity: 0.8,
        size: 40,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: [] // Ensure this is an array
        }
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5
        },
        radius: 60
      },
      grab: {
        distance: 500,
        links: {
          blink: true,
          consent: true,
          opacity: 1
        }
      },
      push: {
        default: true,
        groups: [],
        quantity: 4
      },
      remove: {
        quantity: 2
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: 'ease-out-quad',
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: 'ease-out-quad',
          selectors: [] // Ensure this is an array
        }
      },
      slow: {
        factor: 3,
        radius: 200
      },
      light: {
        area: {
          gradient: {
            start: {
              value: '#ffffff'
            },
            stop: {
              value: '#000000'
            }
          },
          radius: 1000
        },
        shadow: {
          color: {
            value: '#000000'
          },
          length: 2000
        }
      }
    }
  },
  particles: {
    bounce: {
      horizontal: {
        value: 1
      },
      vertical: {
        value: 1
      }
    },
    collisions: {
      absorb: {
        speed: 2
      },
      bounce: {
        horizontal: {
          value: 1
        },
        vertical: {
          value: 1
        }
      },
      enable: false,
      maxSpeed: 50,
      mode: 'bounce',
      overlap: {
        enable: true,
        retries: 0
      }
    },
    color: {
      value: '#ffffff',
      animation: {
        h: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: true,
          offset: 0
        },
        s: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: true,
          offset: 0
        },
        l: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: true,
          offset: 0
        }
      }
    },
    move: {
      angle: {
        offset: 0,
        value: 90
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 3000,
          y: 3000
        }
      },
      center: {
        x: 50,
        y: 50,
        mode: 'percent',
        radius: 0
      },
      decay: 0,
      direction: 'none',
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50
      },
      outModes: {
        default: 'out',
        bottom: 'out',
        left: 'out',
        right: 'out',
        top: 'out'
      },
      random: false,
      speed: 2,
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fill: {}
      },
      vibrate: false,
      warp: false
    },
    number: {
      density: {
        enable: true,
        width: 1920,
        height: 1080
      },
      limit: {
        mode: 'delete',
        value: 0
      },
      value: 100
    },
    opacity: {
      value: {
        min: 0.1,
        max: 0.5
      },
      animation: {
        count: 0,
        enable: true,
        speed: 3,
        decay: 0,
        delay: 0,
        sync: false,
        mode: 'auto',
        startValue: 'random',
        destroy: 'none'
      }
    },
    shape: {
      type: 'circle',
      
    },
    size: {
      value: {
        min: 1,
        max: 10
      },
      animation: {
        count: 0,
        enable: true,
        speed: 20,
        decay: 0,
        delay: 0,
        sync: false,
        mode: 'auto',
        startValue: 'random',
        destroy: 'none'
      }
    },
    zIndex: {
      value: -777,

    }
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  zLayers: 100,
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true
    }
  }
}));
</script>





<style>

</style>