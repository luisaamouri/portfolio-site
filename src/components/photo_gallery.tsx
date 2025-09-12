import React, { useState, useEffect } from 'react';
import { photoGalleryData } from './photo_gallery_data';

interface Photo {
    id: number;
    image: string;
    title: string;
    date: string;
    location: string;
    description: string;
}

const Gallery = () => {
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
    const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const openFullScreen = (photo: Photo) => {
        setSelectedPhoto(photo);
        document.body.style.overflow = 'hidden';
    };

    const closeFullScreen = () => {
        setSelectedPhoto(null);
        document.body.style.overflow = 'auto';
    };

    const nextMobilePhoto = () => {
        setCurrentMobileIndex((prev) => 
            prev === photoGalleryData.length - 1 ? 0 : prev + 1
        );
    };

    const prevMobilePhoto = () => {
        setCurrentMobileIndex((prev) => 
            prev === 0 ? photoGalleryData.length - 1 : prev - 1
        );
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeFullScreen();
        }
    };

    return (
        <>
            <div className="gallery-container">
                <h2>Photo Gallery</h2>
                <p>
                    Amature photography by yours truly.
                </p>
                
                {/* Desktop Grid View */}
                {!isMobile && (
                    <div className="gallery-grid">
                        {photoGalleryData.map((photo) => (
                            <div 
                                key={photo.id} 
                                className="photo-card"
                                onClick={() => openFullScreen(photo)}
                            >
                                <div className="photo-wrapper">
                                    <img 
                                        src={photo.image} 
                                        alt={photo.title}
                                        className="gallery-img"
                                    />
                                    <div className="photo-overlay">
                                        <div className="photo-info">
                                            <h3>{photo.title}</h3>
                                            <p className="photo-date">{photo.date}</p>
                                            <p className="photo-location">{photo.location}</p>
                                            <p className="photo-description">{photo.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Mobile Carousel View */}
                {isMobile && (
                    <div className="mobile-carousel">
                        <div className="carousel-wrapper">
                            <button 
                                className="carousel-btn prev-btn"
                                onClick={prevMobilePhoto}
                                aria-label="Previous photo"
                            >
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            
                            <div className="carousel-content">
                                <img 
                                    src={photoGalleryData[currentMobileIndex].image}
                                    alt={photoGalleryData[currentMobileIndex].title}
                                    className="carousel-img"
                                    onClick={() => openFullScreen(photoGalleryData[currentMobileIndex])}
                                />
                            </div>
                            
                            <button 
                                className="carousel-btn next-btn"
                                onClick={nextMobilePhoto}
                                aria-label="Next photo"
                            >
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                        
                        <div className="mobile-photo-info">
                            <h3>{photoGalleryData[currentMobileIndex].title}</h3>
                            <p className="photo-date">{photoGalleryData[currentMobileIndex].date}</p>
                            <p className="photo-location">{photoGalleryData[currentMobileIndex].location}</p>
                            <p className="photo-description">{photoGalleryData[currentMobileIndex].description}</p>
                        </div>
                        
                        <div className="carousel-indicators">
                            {photoGalleryData.map((_, index) => (
                                <button
                                    key={index}
                                    className={`indicator ${index === currentMobileIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentMobileIndex(index)}
                                    aria-label={`Go to photo ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Fullscreen Modal */}
            {selectedPhoto && (
                <div 
                    className="fullscreen-modal"
                    onClick={closeFullScreen}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                >
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="close-btn"
                            onClick={closeFullScreen}
                            aria-label="Close fullscreen view"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                        
                        <div className="modal-layout">
                            <div className="modal-image-container">
                                <img 
                                    src={selectedPhoto.image}
                                    alt={selectedPhoto.title}
                                    className="modal-img"
                                />
                            </div>
                            
                            <div className="modal-info">
                                <h2>{selectedPhoto.title}</h2>
                                <p className="modal-date">{selectedPhoto.date}</p>
                                <p className="modal-location">{selectedPhoto.location}</p>
                                <p className="modal-description">{selectedPhoto.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;