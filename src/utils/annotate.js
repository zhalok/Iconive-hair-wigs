import html2canvas from "html2canvas";

import { MarkerArea } from "markerjs2";

const takeScreenshot = async (dom, img) => {
  html2canvas(document.body, {}).then((canvas) => {
    window.location.href = canvas.toDataURL();

    img.src = canvas.toDataURL();
    // console.log(img);
  });
};

const takeScreenShot = async () => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const video = document.createElement("video");
  const captureStream = await navigator.mediaDevices.getDisplayMedia({
    video: true,
    preferCurrentTab: true,
  });
  video.srcObject = captureStream;
  context.drawImage(video, 0, 0, window.width, window.height);
  const frame = canvas.toDataURL("image/png");
  captureStream.getTracks().forEach((track) => track.stop());
  //   //   return file;
  //   console.log(frame);
  // window.capture;
};

function showMarkerArea(target) {
  const markerArea = new MarkerArea(target);
  // markerArea.settings.displayMode = "popup";
  markerArea.uiStyleSettings.zIndex = "1000";
  markerArea.uiStyleSettings.backgroundColor = "rgba(0,0,0,0.5)";
  // markerArea.uiStyleSettings
  markerArea.addEventListener("render", (event) => {
    // console.log(event);
    target.src = event.dataUrl;
  });
  markerArea.show();
}

function downloadImage(byteString, fileName) {
  const link = document.createElement("a");
  link.download = fileName;
  link.href = byteString;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(byteString);
}

export default function annotate(dom) {
  //@ts-ignore
  dom = document.body;
  const root = document.getElementById("root");

  const preMain = document.getElementById("main");
  preMain?.remove();

  const main = document.createElement("div");
  main.id = "main";

  const annotatorModal = document.createElement("div");

  annotatorModal.style.display = "none";
  annotatorModal.style.position = "fixed";
  annotatorModal.style.top = "0";
  annotatorModal.style.left = "0";
  annotatorModal.style.width = "100%";
  annotatorModal.style.height = "100%";
  annotatorModal.style.justifyContent = "center";
  annotatorModal.style.alignItems = "center";
  annotatorModal.style.backgroundColor = "rgba(0,0,0,0.5)";
  annotatorModal.style.overflow = "auto";
  annotatorModal.style.zIndex = "1000";
  annotatorModal.id = "annotator";

  const annotator = document.createElement("div");
  annotator.style.display = "flex";
  annotator.style.flexDirection = "column";
  annotator.style.justifyContent = "center";
  annotator.style.width = "80%";
  annotator.style.height = "fit-content";
  annotator.style.marginLeft = "auto";
  annotator.style.marginRight = "auto";
  annotator.style.backgroundColor = "white";
  annotator.style.padding = "10px";
  annotator.style.borderRadius = "10px";
  annotator.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
  annotator.style.textAlign = "center";
  annotator.style.overflowY = "scroll";
  annotator.style.zIndex = "1000";

  const buttonsDiv = document.createElement("div");
  buttonsDiv.style.display = "flex";
  buttonsDiv.style.flexDirection = "row";
  buttonsDiv.style.justifyContent = "space-between";
  buttonsDiv.style.width = "50%";
  buttonsDiv.style.marginTop = "10px";
  buttonsDiv.style.padding = "10px";
  buttonsDiv.style.columnGap = "10px";
  buttonsDiv.style.marginLeft = "auto";

  root?.appendChild(main);

  // const img = document.createElement("img");
  const img = new Image();
  img.id = "annotate_preview";

  // img.style.border = "1px solid #ccc";
  img.width = "100%";
  // img.height = "fit-content";
  img.height = "100%";
  img.style.overflowY = "scroll";
  //   img.style.marginBottom = "10px";
  // img.style.overflowY = "auto";
  //   img.style.borderRadius = "10px";

  img.onclick = (e) => {
    showMarkerArea(e.target);
  };

  const openButton = document.createElement("button");
  openButton.id = "open";
  openButton.innerHTML = "Take Screenshot";

  const closeButton = document.createElement("button");
  closeButton.id = "close";
  closeButton.innerHTML = "Close";
  closeButton.style.marginLeft = "auto";
  closeButton.style.width = "50%";

  const downloadButton = document.createElement("button");
  downloadButton.id = "download";
  downloadButton.innerHTML = "Download";
  downloadButton.style.marginRight = "auto";
  downloadButton.style.width = "50%";
  downloadButton.onclick = () => {
    downloadImage(img.src, "screenshot.png");
  };

  const openImage = () => {
    // takeScreenshot(dom, img).then(() => {
    //   annotatorModal.style.display = "flex";
    // });
    takeScreenShot();
  };

  openButton.onclick = () => {
    openImage();
  };

  closeButton.onclick = () => {
    annotatorModal.style.display = "none";
  };

  buttonsDiv.appendChild(downloadButton);
  buttonsDiv.appendChild(closeButton);

  annotator.appendChild(img);
  annotator.appendChild(buttonsDiv);

  annotatorModal.appendChild(annotator);

  main.appendChild(annotatorModal);
  let pressedKeys = [];

  document.addEventListener("keydown", handleKeydown);
  document.addEventListener("keyup", handleKeyup);

  function handleKeydown(e) {
    if (!pressedKeys.includes(e.key)) {
      pressedKeys.push(e.key);

      if (
        pressedKeys.includes("Control") &&
        pressedKeys.includes("b") &&
        pressedKeys.length == 2
      ) {
        e.preventDefault();
        console.log("hello");
        openImage();

        return;
      }
    }
  }

  function handleKeyup(e) {
    const index = pressedKeys.indexOf(e.key);
    pressedKeys.splice(index, 1);
  }

  return "";
}
