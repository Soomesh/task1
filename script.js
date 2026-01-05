const assetsData = [
    {
      title: "Technical Project Management",
      type: "video",
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Understand how to manage technical projects."
    },
    {
      title: "Threadbuild",
      type: "image",
      src: "https://via.placeholder.com/400",
      description: "Learn how discussion threads are built."
    }
  ];
  
  const assetsContainer = document.getElementById("assetsContainer");
  
  function renderAssets(data) {
    assetsContainer.innerHTML = "";
  
    data.forEach(asset => {
      const card = document.createElement("div");
      card.className = "asset-card";
  
      card.innerHTML = `
        <div class="asset-header">
          <h4>${asset.title}</h4>
          <button class="desc-toggle">⌄</button>
        </div>
  
        <div class="asset-body">
          ${renderMedia(asset)}
        </div>
  
        <div class="asset-description">
          <p>${asset.description}</p>
        </div>
      `;
  
      assetsContainer.appendChild(card);
    });
  }
  
  function renderMedia(asset) {
    if (asset.type === "video") {
      return `
        <iframe 
          src="${asset.src}" 
          frameborder="0" 
          allowfullscreen>
        </iframe>
      `;
    }
  
    if (asset.type === "image") {
      return `<img src="${asset.src}" alt="${asset.title}" />`;
    }
  
    return "";
  }
  
  renderAssets(assetsData);
  
  // Toggle description
  
  document.addEventListener("click", e => {
    if (e.target.classList.contains("desc-toggle")) {
      const desc = e.target
        .closest(".asset-card")
        .querySelector(".asset-description");
  
      desc.classList.toggle("show");
    }
  });
  
  // Journey board toggle

  const journeyBoard = document.getElementById("journeyBoard");
  const toggleJourney = document.getElementById("toggleJourney");
  
  toggleJourney.addEventListener("click", () => {
    journeyBoard.classList.toggle("expanded");
    journeyBoard.classList.toggle("collapsed");
  });
  