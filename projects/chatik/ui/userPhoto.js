export default class UserPhoto {
  constructor(element, onUpload) {
    this.element = element;
    this.onUpload = onUpload;

    this.element.addEventListener('click', () => {
      const load = document.querySelector('#load');
      const closeBtn = document.querySelector('.closeBtn');
      const cleanBtn = document.querySelector('.clean');
      const saveBtn = document.querySelector('.save');
      const previewPhoto = document.querySelector('.preview-photo');
      const fileReader = new FileReader();
      const inputFile = document.querySelector('#file');

      load.classList.remove('hidden');

      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        load.classList.add('hidden');
      });

      inputFile.addEventListener('change', (e) => {
        const [file] = e.target.files;

        if (file) {
          if (file.size > 600 * 1024) {
            alert('слишком большой файл');
          } else {
            fileReader.readAsDataURL(file);
          }
        }
      });

      fileReader.addEventListener('load', () => {
        previewPhoto.style.backgroundImage = 'url(' + fileReader.result + ')';

        cleanBtn.addEventListener('click', () => {
          previewPhoto.style.backgroundImage = '';
        });
      });

      saveBtn.addEventListener('click', () => {
        this.onUpload(fileReader.result);
        load.classList.add('hidden');
      });
    });

    this.element.addEventListener('dragover', (e) => {
      if (e.dataTransfer.items.length && e.dataTransfer.items[0].kind === 'file') {
        e.preventDefault();
      }
    });

    this.element.addEventListener('drop', (e) => {
      const file = e.dataTransfer.items[0].getAsFile();
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.addEventListener('load', () => {
        return this.onUpload(reader.result);
      });
      e.preventDefault();
    });
  }
  set(photo) {
    this.element.style.backgroundImage = `url(${photo})`;
  }
}
