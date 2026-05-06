// Project data - you can update this with your actual project information
const projects = {
    1: {
        title: "Fish Lantern",
        subtitle: "2022 | Installation | mixed media",
        thumbnail: "images/projects/highschool/fish2.jpg",  // Small thumbnail (first image)
        images: [
            "images/projects/highschool/fish2.jpg",
            "images/projects/highschool/fish3.jpg",
            "images/projects/highschool/fish4.jpg"
        ],
        description: "The Fish Lantern explores the traditional culture of celebrating the Lantern Festival. Inspired by the coastal history of my hometown, this project looks at how people living near the sea create fish lanterns to pray for safety and a good harvest. The lantern installation, followed by watercolor pieces, spreads the understanding of this unique culture."
    },
    2: {
        title: "Childhood Monopoly",
        subtitle: "2024 Digital | Prints | Card Games",
        thumbnail: "images/projects/uni/unit4/poster.jpg",
        images: [
            "images/projects/uni/unit4/u4-01.jpg"
        ],
        components: [
            { src: "images/projects/uni/unit4/u4-02.jpg", fullWidth: true }
        ],
        description: "Inspired by 'Totto-Chan: The Little Girl at the Window', this project explores Gen Z's collective childhood memories through the lens of play. By repurposing the mechanics of 'Monopoly Deal', I've transformed the card game into a medium for preserving and celebrating the nostalgic toys of our youth."
    },
    3: {
        title: "Sprout City",
        subtitle: "2026 | Board Game Design | Mixed Media",
        thumbnail: "images/projects/uni/unit9/cover.jpg",
        images: [
            "images/projects/uni/unit9/display.JPG"
        ],
        components: [
            "images/projects/uni/unit9/componet1.jpeg",
            "images/projects/uni/unit9/component2.jpeg"
        ],
        description: "Sprout City is a tile-placement game exploring the homogenization of urban green spaces. Players act as park planners, balancing community happiness against ecological \"wildness\" to reflect on the delicate trade-offs of man-made nature."
    },
    4: {
        title: "What’s On Greenwich Today",
        subtitle: "2025 | A5 Zine | Digital Illustration",
        thumbnail: "images/projects/uni/unit8/cover.jpg",
        images: [
            "images/projects/uni/unit8/unit8.jpg",
            "images/projects/uni/unit8/unit810.jpeg",
            "images/projects/uni/unit8/unit820.jpeg",
            "images/projects/uni/unit8/unit830.jpeg",
            "images/projects/uni/unit8/unit850.jpg"
        ],
        description: "An illustrated children’s zine that explores local nature and outdoor play. Using the park’s iconic animals as guides, the project highlights key landmarks and activities, inviting young readers to discover the magic of their local environment."
    },
    5: {
        title: "The Book of Rococo Closet",
        subtitle: "2025 | A4 Zine | Digital Illustration",
        thumbnail: "images/projects/uni/unit7/unit73_square.png",
        images: [
            "images/projects/uni/unit7/unit74.jpg"
        ],
        components: [
            "images/projects/uni/unit7/unit72.jpg",
            "images/projects/uni/unit7/unit71.JPG",
            { src: "images/projects/uni/unit7/unit75.png", fullWidth: true }
        ],
        description: "Deconstructing the Rococo Silhouette is an illustrated A4 zine that peels back the layers of 18th-century French court dresses. Through interactive flaps, readers explore a virtual closet—discovering the purpose of each garment piece, how it shaped the iconic silhouette, and the history behind the era."
    },
    6: {
        title: "Project 6",
        thumbnail: "images/projects/project-6-thumb.jpg",
        images: ["images/projects/project-6.jpg"],
        description: "This is a placeholder description for Project 6. Replace this text with your actual project description when you upload your work. You can include details about the concept, medium, techniques used, and the inspiration behind the piece."
    },
    7: {
        title: "Project 7",
        thumbnail: "images/projects/project-7-thumb.jpg",
        images: ["images/projects/project-7.jpg"],
        description: "This is a placeholder description for Project 7. Replace this text with your actual project description when you upload your work. You can include details about the concept, medium, techniques used, and the inspiration behind the piece."
    },
    8: {
        title: "Project 8",
        thumbnail: "images/projects/project-8-thumb.jpg",
        images: ["images/projects/project-8.jpg"],
        description: "This is a placeholder description for Project 8. Replace this text with your actual project description when you upload your work. You can include details about the concept, medium, techniques used, and the inspiration behind the piece."
    }
};

// Current project and image index
let currentProjectId = 3;
let currentImageIndex = 0;

// Function to update the main project display
function updateProjectDisplay(projectId) {
    const project = projects[projectId];
    if (!project) return;
    
    currentProjectId = projectId;
    currentImageIndex = 0;
    
    // Update main image
    const mainImage = document.getElementById('mainImage');
    mainImage.src = project.images[0];
    mainImage.alt = project.title;
    
    // Update title
    const projectTitle = document.getElementById('projectTitle');
    projectTitle.textContent = project.title;
    
    // Update subtitle
    const projectSubtitle = document.getElementById('projectSubtitle');
    if (projectSubtitle) {
        if (project.subtitle) {
            projectSubtitle.textContent = project.subtitle;
            projectSubtitle.style.display = 'block';
        } else {
            projectSubtitle.style.display = 'none';
        }
    }
    
    // Update description
    const projectText = document.getElementById('projectText');
    projectText.textContent = project.description;
    
    // Update components
    const projectComponents = document.getElementById('projectComponents');
    if (projectComponents) {
        projectComponents.innerHTML = ''; // clear previous
        if (project.components && project.components.length > 0) {
            project.components.forEach(comp => {
                const img = document.createElement('img');
                img.src = typeof comp === 'string' ? comp : comp.src;
                if (typeof comp === 'object' && comp.fullWidth) {
                    img.classList.add('full-width');
                }
                img.alt = project.title + " component";
                img.style.cursor = 'pointer';
                img.addEventListener('click', function() {
                    const zoomModal = document.getElementById('zoomModal');
                    const zoomImage = document.getElementById('zoomImage');
                    zoomImage.src = this.src;
                    zoomImage.alt = this.alt;
                    
                    const zoomLeftArrow = document.getElementById('zoomLeftArrow');
                    const zoomRightArrow = document.getElementById('zoomRightArrow');
                    if (zoomLeftArrow) zoomLeftArrow.style.display = 'none';
                    if (zoomRightArrow) zoomRightArrow.style.display = 'none';
                    
                    zoomModal.style.display = 'flex';
                    document.body.style.overflow = 'hidden';
                });
                projectComponents.appendChild(img);
            });
            projectComponents.style.display = 'grid';
        } else {
            projectComponents.style.display = 'none';
        }
    }
    
    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail-item');
    thumbnails.forEach(thumb => {
        thumb.classList.remove('active');
        if (thumb.dataset.project === projectId.toString()) {
            thumb.classList.add('active');
        }
    });
    
    // Update navigation arrows visibility
    updateNavigationArrows();
    
    // Scroll to top of project display
    const projectDisplay = document.getElementById('projectDisplay');
    projectDisplay.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Function to show next image in gallery
function showNextImage() {
    const project = projects[currentProjectId];
    if (!project || project.images.length <= 1) return;
    
    currentImageIndex = (currentImageIndex + 1) % project.images.length;
    updateCurrentImage();
}

// Function to show previous image in gallery
function showPrevImage() {
    const project = projects[currentProjectId];
    if (!project || project.images.length <= 1) return;
    
    currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
    updateCurrentImage();
}

// Function to update the current displayed image
function updateCurrentImage() {
    const project = projects[currentProjectId];
    if (!project) return;
    
    const mainImage = document.getElementById('mainImage');
    mainImage.src = project.images[currentImageIndex];
    mainImage.alt = `${project.title} - Image ${currentImageIndex + 1}`;
    
    updateNavigationArrows();
}

// Function to update navigation arrows visibility
function updateNavigationArrows() {
    const project = projects[currentProjectId];
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    
    if (project && project.images.length > 1) {
        leftArrow.style.display = 'flex';
        rightArrow.style.display = 'flex';
    } else {
        leftArrow.style.display = 'none';
        rightArrow.style.display = 'none';
    }
}

// Function to open zoom modal
function openZoomModal() {
    const project = projects[currentProjectId];
    if (!project) return;
    
    const zoomModal = document.getElementById('zoomModal');
    const zoomImage = document.getElementById('zoomImage');
    zoomImage.src = project.images[currentImageIndex];
    zoomImage.alt = `${project.title} - Image ${currentImageIndex + 1}`;
    
    const zoomLeftArrow = document.getElementById('zoomLeftArrow');
    const zoomRightArrow = document.getElementById('zoomRightArrow');
    if (zoomLeftArrow && zoomRightArrow) {
        if (project.images.length > 1) {
            zoomLeftArrow.style.display = 'flex';
            zoomRightArrow.style.display = 'flex';
        } else {
            zoomLeftArrow.style.display = 'none';
            zoomRightArrow.style.display = 'none';
        }
    }
    
    zoomModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Function to close zoom modal
function closeZoomModal() {
    const zoomModal = document.getElementById('zoomModal');
    zoomModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Function to show next image in zoom modal
function zoomNextImage() {
    const project = projects[currentProjectId];
    if (!project || project.images.length <= 1) return;
    
    currentImageIndex = (currentImageIndex + 1) % project.images.length;
    const zoomImage = document.getElementById('zoomImage');
    zoomImage.src = project.images[currentImageIndex];
}

// Function to show previous image in zoom modal
function zoomPrevImage() {
    const project = projects[currentProjectId];
    if (!project || project.images.length <= 1) return;
    
    currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
    const zoomImage = document.getElementById('zoomImage');
    zoomImage.src = project.images[currentImageIndex];
}

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail-item');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const projectId = parseInt(this.dataset.project);
            updateProjectDisplay(projectId);
        });
    });
    
    // Navigation arrows
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    
    if (leftArrow) {
        leftArrow.addEventListener('click', showPrevImage);
    }
    
    if (rightArrow) {
        rightArrow.addEventListener('click', showNextImage);
    }
    
    // Main image click to zoom
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.addEventListener('click', openZoomModal);
        mainImage.style.cursor = 'pointer';
    }
    
    // Zoom modal controls
    const zoomClose = document.getElementById('zoomClose');
    const zoomLeftArrow = document.getElementById('zoomLeftArrow');
    const zoomRightArrow = document.getElementById('zoomRightArrow');
    const zoomModal = document.getElementById('zoomModal');
    
    if (zoomClose) {
        zoomClose.addEventListener('click', closeZoomModal);
    }
    
    if (zoomLeftArrow) {
        zoomLeftArrow.addEventListener('click', zoomPrevImage);
    }
    
    if (zoomRightArrow) {
        zoomRightArrow.addEventListener('click', zoomNextImage);
    }
    
    // Close modal when clicking outside image
    if (zoomModal) {
        zoomModal.addEventListener('click', function(e) {
            if (e.target === zoomModal) {
                closeZoomModal();
            }
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (zoomModal.style.display === 'flex') {
            if (e.key === 'Escape') {
                closeZoomModal();
            } else if (e.key === 'ArrowLeft') {
                zoomPrevImage();
            } else if (e.key === 'ArrowRight') {
                zoomNextImage();
            }
        }
    });
    
    // Set initial project dynamically
    const initialThumb = document.querySelector('.thumbnail-item.active') || document.querySelector('.thumbnail-item');
    if (initialThumb) {
        updateProjectDisplay(parseInt(initialThumb.dataset.project));
    }
});
