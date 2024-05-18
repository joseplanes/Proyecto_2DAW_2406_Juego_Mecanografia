class AudioManager {
  constructor(scene) {
    this.scene = scene;
    this.sounds = {};
  }

  // Cargar un sonido
  load(key, path) {
    this.scene.load.audio(key, path);
  }

  // Añadir un sonido a la gestión
  add(key, config) {
    if (!this.sounds[key]) {
      this.sounds[key] = this.scene.sound.add(key, config);
    }
  }

  // Reproducir un sonido
  play(key, config) {
    if (this.sounds[key]) {
      this.sounds[key].play(config);
    }
  }

  // Pausar un sonido
  pause(key) {
    if (this.sounds[key] && this.sounds[key].isPlaying) {
      this.sounds[key].pause();
    }
  }

  // Reanudar un sonido
  resume(key) {
    if (this.sounds[key] && this.sounds[key].isPaused) {
      this.sounds[key].resume();
    }
  }

  // Detener un sonido
  stop(key) {
    if (this.sounds[key] && this.sounds[key].isPlaying) {
      this.sounds[key].stop();
    }
  }

  // Silenciar todos los sonidos
  muteAll() {
    this.scene.sound.mute = true;
  }

  // Activar sonido de todos los sonidos
  unmuteAll() {
    this.scene.sound.mute = false;
  }

  // isPlaying
  isPlaying(key) {
    return this.sounds[key] && this.sounds[key].isPlaying;
  }


  // aumentar volumen
  increaseVolume(key, value) {
    if (this.sounds[key]) {
      this.sounds[key].setVolume(this.sounds[key].volume + value);
    }
  }

}

export default AudioManager;
