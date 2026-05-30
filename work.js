// Portfolio data — single source of truth for index + detail views
const projects = {
    1: {
        title: "Fish Lantern",
        subtitle: "2022 | Installation | mixed media",
        hero: "images/projects/highschool/fish2.jpg",
        indexLayout: "single",
        indexImages: ["images/projects/highschool/fish2.jpg"],
        images: [
            "images/projects/highschool/fish1.jpg",
            "images/projects/highschool/fish2.jpg",
            "images/projects/highschool/fish3.jpg",
            "images/projects/highschool/fish4.jpg",
            "images/projects/highschool/DSCF5897-1.png"
        ],
        description: "The Fish Lantern explores the traditional culture of celebrating the Lantern Festival. Inspired by the coastal history of my hometown, this project looks at how people living near the sea create fish lanterns to pray for safety and a good harvest. The lantern installation, followed by watercolor pieces, spreads the understanding of this unique culture."
    },
    2: {
        title: "Childhood Monopoly",
        subtitle: "2024 | Digital | Prints | Card Games",
        hero: "images/projects/uni/unit4/u4-01.jpg",
        indexLayout: "trio",
        indexImages: [
            "images/projects/uni/unit4/u4-01.jpg",
            "images/projects/uni/unit4/u4-02.jpg"
        ],
        images: [
            "images/projects/uni/unit4/u4-01.jpg",
            "images/projects/uni/unit4/u4-02.jpg"
        ],
        description: "Inspired by 'Totto-Chan: The Little Girl at the Window', this project explores Gen Z's collective childhood memories through the lens of play. By repurposing the mechanics of 'Monopoly Deal', I've transformed the card game into a medium for preserving and celebrating the nostalgic toys of our youth."
    },
    3: {
        title: "Sprout City",
        subtitle: "2026 | Board Game Design | Mixed Media",
        hero: "images/projects/uni/unit9/cover.jpg",
        indexLayout: "trio",
        indexImages: [
            "images/projects/uni/unit9/cover.jpg",
            "images/projects/uni/unit9/display.JPG",
            "images/projects/uni/unit9/componet1.jpeg"
        ],
        images: [
            "images/projects/uni/unit9/cover.jpg",
            "images/projects/uni/unit9/display.JPG",
            "images/projects/uni/unit9/componet1.jpeg",
            "images/projects/uni/unit9/component2.jpeg"
        ],
        description: "Sprout City is a tile-placement game exploring the homogenization of urban green spaces. Players act as park planners, balancing community happiness against ecological \"wildness\" to reflect on the delicate trade-offs of man-made nature."
    },
    4: {
        title: "What's On Greenwich Today",
        subtitle: "2025 | A5 Zine | Digital Illustration",
        hero: "images/projects/uni/unit8/cover.jpg",
        indexLayout: "featured-row",
        indexImages: [
            "images/projects/uni/unit8/cover.jpg",
            "images/projects/uni/unit8/unit8.jpg",
            "images/projects/uni/unit8/unit810.jpeg",
            "images/projects/uni/unit8/unit820.jpeg"
        ],
        images: [
            "images/projects/uni/unit8/cover.jpg",
            "images/projects/uni/unit8/unit8.jpg",
            "images/projects/uni/unit8/unit810.jpeg",
            "images/projects/uni/unit8/unit820.jpeg",
            "images/projects/uni/unit8/unit830.jpeg",
            "images/projects/uni/unit8/unit850.jpg"
        ],
        description: "An illustrated children's zine that explores local nature and outdoor play. Using the park's iconic animals as guides, the project highlights key landmarks and activities, inviting young readers to discover the magic of their local environment."
    },
    5: {
        title: "The Book of Rococo Closet",
        subtitle: "2025 | A4 Zine | Digital Illustration",
        hero: "images/projects/uni/unit7/unit73_square.png",
        indexLayout: "film-strip",
        indexImages: [
            "images/projects/uni/unit7/unit73_square.png",
            "images/projects/uni/unit7/unit72.jpg",
            "images/projects/uni/unit7/unit71.JPG",
            "images/projects/uni/unit7/unit74.jpg"
        ],
        images: [
            "images/projects/uni/unit7/unit73_square.png",
            "images/projects/uni/unit7/unit74.jpg",
            "images/projects/uni/unit7/unit72.jpg",
            "images/projects/uni/unit7/unit71.JPG",
            "images/projects/uni/unit7/unit75.png"
        ],
        description: "Deconstructing the Rococo Silhouette is an illustrated A4 zine that peels back the layers of 18th-century French court dresses. Through interactive flaps, readers explore a virtual closet—discovering the purpose of each garment piece, how it shaped the iconic silhouette, and the history behind the era."
    },
    6: {
        title: "Unit 10",
        subtitle: "2026 | Watercolor & Line Art",
        hero: "images/projects/uni/unit10/1.jpeg",
        indexLayout: "hero-grid",
        indexMain: "images/projects/uni/unit10/1.jpeg",
        indexGrid: [
            "images/projects/uni/unit10/2.jpeg",
            "images/projects/uni/unit10/3.jpeg",
            "images/projects/uni/unit10/4.jpeg",
            "images/projects/uni/unit10/8.jpeg"
        ],
        indexLineart: [
            "images/projects/uni/unit10/9.jpeg",
            "images/projects/uni/unit10/10.jpeg",
            "images/projects/uni/unit10/11.jpeg",
            "images/projects/uni/unit10/12.jpeg",
            "images/projects/uni/unit10/13.jpeg",
            "images/projects/uni/unit10/14.jpeg",
            "images/projects/uni/unit10/15.jpeg",
            "images/projects/uni/unit10/16.jpeg"
        ],
        images: [
            "images/projects/uni/unit10/1.jpeg",
            "images/projects/uni/unit10/2.jpeg",
            "images/projects/uni/unit10/3.jpeg",
            "images/projects/uni/unit10/4.jpeg",
            "images/projects/uni/unit10/5.jpeg",
            "images/projects/uni/unit10/6.jpeg",
            "images/projects/uni/unit10/7.jpeg",
            "images/projects/uni/unit10/8.jpeg",
            "images/projects/uni/unit10/9.jpeg",
            "images/projects/uni/unit10/10.jpeg",
            "images/projects/uni/unit10/11.jpeg",
            "images/projects/uni/unit10/12.jpeg",
            "images/projects/uni/unit10/13.jpeg",
            "images/projects/uni/unit10/14.jpeg",
            "images/projects/uni/unit10/15.jpeg",
            "images/projects/uni/unit10/16.jpeg"
        ],
        description: "A watercolor and line-art series exploring narrative illustration, process sketches, and finished compositions."
    }
};

/** Display order on the portfolio index (newest first) */
const PORTFOLIO_ORDER = [6, 3, 4, 5, 2, 1];

let currentProjectId = null;
let currentProjectImages = [];
let currentImageIndex = 0;
let imageSwapTimeout = null;

function getHeroSrc(project) {
    return project.hero || (project.images && project.images[0]) || "";
}

function getAllImages(project) {
    const seen = new Set();
    const list = [];
    (project.images || []).forEach((src) => {
        if (src && !seen.has(src)) {
            seen.add(src);
            list.push(src);
        }
    });
    if (project.components) {
        project.components.forEach((comp) => {
            const src = typeof comp === "string" ? comp : comp && comp.src;
            if (src && !seen.has(src)) {
                seen.add(src);
                list.push(src);
            }
        });
    }
    return list;
}

function buildIndexGallery(project) {
    const layout = project.indexLayout || "single";
    const title = project.title;

    if (layout === "hero-grid" && project.indexMain) {
        const gridImgs = (project.indexGrid || [])
            .map((src) => `<img src="${src}" alt="${title}" loading="lazy" decoding="async">`)
            .join("");
        const lineart = project.indexLineart
            ? `<div class="unit10-lineart">
                <p class="unit10-lineart-label">Process &amp; Line Art Sketches</p>
                <div class="unit10-lineart-row">
                  ${project.indexLineart
                      .map(
                          (src) =>
                              `<img src="${src}" class="lineart-stamp" alt="${title} sketch" loading="lazy">`
                      )
                      .join("")}
                </div>
              </div>`
            : "";

        return `
            <div class="project-gallery-cluster layout-hero-grid">
                <div class="cluster-main">
                    <img src="${project.indexMain}" alt="${title}" loading="lazy" decoding="async">
                </div>
                <div class="cluster-grid">${gridImgs}</div>
            </div>
            ${lineart}
        `;
    }

    if (layout === "trio" || layout === "film-strip" || layout === "featured-row") {
        const imgs = project.indexImages || [getHeroSrc(project)];
        const cells = imgs
            .map((src) => `<img src="${src}" alt="${title}" loading="lazy" decoding="async">`)
            .join("");
        return `<div class="project-gallery-cluster layout-${layout}">${cells}</div>`;
    }

    const src = (project.indexImages && project.indexImages[0]) || getHeroSrc(project);
    return `
        <div class="project-gallery-cluster layout-single">
            <img src="${src}" alt="${title}" loading="lazy" decoding="async">
        </div>
    `;
}

function renderPortfolioIndex() {
    const listEl = document.getElementById("portfolioList");
    if (!listEl) return;

    listEl.innerHTML = "";

    PORTFOLIO_ORDER.forEach((id) => {
        const project = projects[id];
        if (!project) return;

        const article = document.createElement("article");
        article.className = "portfolio-item scroll-fade";
        article.dataset.project = String(id);
        article.setAttribute("tabindex", "0");
        article.setAttribute("role", "button");
        article.setAttribute("aria-label", `View ${project.title}`);

        article.innerHTML = `
            <div class="portfolio-item-gallery">
                ${buildIndexGallery(project)}
            </div>
            <h3 class="portfolio-item-title">${project.title}</h3>
        `;

        listEl.appendChild(article);
    });
}

function initScrollFade() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    entry.target.classList.remove("is-hidden");
                } else {
                    entry.target.classList.remove("is-visible");
                    entry.target.classList.add("is-hidden");
                }
            });
        },
        { root: null, rootMargin: "-8% 0px -8% 0px", threshold: 0.2 }
    );

    document.querySelectorAll(".scroll-fade").forEach((el) => observer.observe(el));
}

function bindPortfolioClicks() {
    const listEl = document.getElementById("portfolioList");
    if (!listEl) return;

    listEl.addEventListener("click", (e) => {
        const item = e.target.closest(".portfolio-item");
        if (!item) return;
        openProjectDetail(parseInt(item.dataset.project, 10));
    });

    listEl.addEventListener("keydown", (e) => {
        if (e.key !== "Enter" && e.key !== " ") return;
        const item = e.target.closest(".portfolio-item");
        if (!item) return;
        e.preventDefault();
        openProjectDetail(parseInt(item.dataset.project, 10));
    });
}

function populateDetailThumbnails(images, projectTitle) {
    const reel = document.getElementById("detailThumbnailReel");
    if (!reel) return;

    reel.innerHTML = "";
    images.forEach((src, index) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "detail-thumb" + (index === 0 ? " is-active" : "");
        btn.setAttribute("role", "tab");
        btn.setAttribute("aria-selected", index === 0 ? "true" : "false");
        btn.setAttribute("aria-label", `Image ${index + 1} of ${images.length}`);
        btn.innerHTML = `<img src="${src}" alt="">`;
        btn.addEventListener("click", () => switchDetailImage(index));
        reel.appendChild(btn);
    });
}

function updateDetailContent(projectId) {
    const project = projects[projectId];
    if (!project) return;

    currentProjectId = projectId;
    currentImageIndex = 0;
    currentProjectImages = getAllImages(project);

    const titleEl = document.getElementById("detailTitle");
    const subtitleEl = document.getElementById("detailSubtitle");
    const descEl = document.getElementById("detailDescription");
    const mainImg = document.getElementById("detailMainImage");

    if (titleEl) titleEl.textContent = project.title || "";
    if (subtitleEl) {
        subtitleEl.textContent = project.subtitle || "";
        subtitleEl.hidden = !project.subtitle;
    }
    if (descEl) descEl.textContent = project.description || "";

    if (mainImg && currentProjectImages.length > 0) {
        mainImg.src = currentProjectImages[0];
        mainImg.alt = project.title;
        mainImg.classList.remove("is-swapping");
    }

    populateDetailThumbnails(currentProjectImages, project.title);
}

function openProjectDetail(projectId) {
    const detail = document.getElementById("projectDetail");
    if (!detail || !projects[projectId]) return;

    updateDetailContent(projectId);
    detail.classList.add("is-opening");
    detail.setAttribute("aria-hidden", "false");
    document.body.classList.add("detail-mode-open");

    requestAnimationFrame(() => {
        detail.classList.add("is-active");
        detail.classList.remove("is-opening");
    });
}

function closeProjectDetail() {
    const detail = document.getElementById("projectDetail");
    if (!detail) return;

    detail.classList.remove("is-active");
    detail.setAttribute("aria-hidden", "true");
    document.body.classList.remove("detail-mode-open");

    const onEnd = (e) => {
        if (e.propertyName !== "opacity") return;
        detail.removeEventListener("transitionend", onEnd);
    };
    detail.addEventListener("transitionend", onEnd);
}

function switchDetailImage(index) {
    if (index < 0 || index >= currentProjectImages.length) return;

    currentImageIndex = index;
    const mainImg = document.getElementById("detailMainImage");
    const reel = document.getElementById("detailThumbnailReel");
    const src = currentProjectImages[index];

    if (reel) {
        reel.querySelectorAll(".detail-thumb").forEach((btn, i) => {
            const active = i === index;
            btn.classList.toggle("is-active", active);
            btn.setAttribute("aria-selected", active ? "true" : "false");
            if (active) {
                btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
            }
        });
    }

    if (!mainImg) return;

    mainImg.classList.add("is-swapping");
    if (imageSwapTimeout) clearTimeout(imageSwapTimeout);

    imageSwapTimeout = setTimeout(() => {
        mainImg.src = src;
        mainImg.classList.remove("is-swapping");
    }, 180);
}

function nextDetailImage() {
    if (currentProjectImages.length <= 1) return;
    switchDetailImage((currentImageIndex + 1) % currentProjectImages.length);
}

function prevDetailImage() {
    if (currentProjectImages.length <= 1) return;
    switchDetailImage(
        (currentImageIndex - 1 + currentProjectImages.length) % currentProjectImages.length
    );
}

function initDetailMode() {
    const detail = document.getElementById("projectDetail");
    const closeBtn = document.getElementById("projectDetailClose");
    const backdrop = document.getElementById("projectDetailBackdrop");
    const mainWrap = document.getElementById("detailMainImageWrap");

    if (closeBtn) closeBtn.addEventListener("click", closeProjectDetail);
    if (backdrop) backdrop.addEventListener("click", closeProjectDetail);

    document.addEventListener("keydown", (e) => {
        if (!detail || !detail.classList.contains("is-active")) return;
        if (e.key === "Escape") closeProjectDetail();
        else if (e.key === "ArrowRight") nextDetailImage();
        else if (e.key === "ArrowLeft") prevDetailImage();
    });

    let touchStartX = 0;
    if (mainWrap) {
        mainWrap.addEventListener(
            "touchstart",
            (e) => {
                touchStartX = e.changedTouches[0].screenX;
            },
            { passive: true }
        );
        mainWrap.addEventListener(
            "touchend",
            (e) => {
                const touchEndX = e.changedTouches[0].screenX;
                const threshold = 50;
                if (touchEndX < touchStartX - threshold) nextDetailImage();
                else if (touchEndX > touchStartX + threshold) prevDetailImage();
            },
            { passive: true }
        );
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderPortfolioIndex();
    initScrollFade();
    bindPortfolioClicks();
    initDetailMode();
});
