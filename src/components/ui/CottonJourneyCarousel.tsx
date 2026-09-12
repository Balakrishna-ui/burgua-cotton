'use client';

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CottonJourneyCarousel.module.css';

export interface JourneyStage {
  stage: string;
  title: string;
  desc: string;
  image: string;
}

interface CottonJourneyCarouselProps {
  stages?: JourneyStage[];
}

export const CottonJourneyCarousel: React.FC<CottonJourneyCarouselProps> = ({ stages }) => {
  const items = useMemo(() => (stages && stages.length > 0 ? stages : []), [stages]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const prefersReducedMotion = useRef(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.current = mq.matches;
    const handler = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const goToStage = useCallback(
    (index: number) => {
      if (items.length === 0) return;
      const nextIdx = ((index % items.length) + items.length) % items.length;
      if (nextIdx === activeIndex) return;

      setIsTransitioning(true);
      setActiveIndex(nextIdx);

      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 350);
      return () => clearTimeout(timer);
    },
    [items.length, activeIndex]
  );

  const handleNext = useCallback(() => {
    goToStage(activeIndex + 1);
  }, [goToStage, activeIndex]);

  const handlePrev = useCallback(() => {
    goToStage(activeIndex - 1);
  }, [goToStage, activeIndex]);

  // Gentle auto-play (7s) — paused on hover, focus, or reduced motion
  const startAutoPlay = useCallback(() => {
    if (prefersReducedMotion.current) return;
    if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    autoTimerRef.current = setInterval(() => {
      if (!isHoveredRef.current) {
        goToStage(activeIndex + 1);
      }
    }, 7000);
  }, [goToStage, activeIndex]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    };
  }, [startAutoPlay]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    },
    [handlePrev, handleNext]
  );

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  if (items.length === 0) return null;

  const current = items[activeIndex];
  const formattedStageNum = String(activeIndex + 1).padStart(2, '0');
  const totalStages = String(items.length).padStart(2, '0');
  const progressPercent = ((activeIndex + 1) / items.length) * 100;

  return (
    <div
      className={styles.journeyWrapper}
      tabIndex={0}
      role="region"
      aria-label="Cotton Journey material process carousel"
      aria-roledescription="carousel"
      onKeyDown={handleKeyDown}
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; }}
      onFocus={() => { isHoveredRef.current = true; }}
      onBlur={() => { isHoveredRef.current = false; }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* ===================================================================
          1. MAIN SHOWCASE: SINGLE ACTIVE STAGE CARD WITH FLOATING ARROWS
          =================================================================== */}
      <div className={styles.showcaseStageBox}>
        {/* Floating Left Navigation Button */}
        <button
          type="button"
          className={`${styles.floatingArrowBtn} ${styles.floatingArrowPrev}`}
          onClick={handlePrev}
          aria-label="Previous stage"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* The Single Active Stage Card */}
        <div className={styles.activeStageCard}>
          {/* Left: Dominant Active Stage Image (approx 60-65% width) */}
          <div className={styles.stageImageColumn}>
            <Image
              key={current.image}
              src={current.image}
              alt={`Stage ${formattedStageNum}: ${current.title} — ${current.desc}`}
              fill
              priority={activeIndex === 0}
              sizes="(max-width: 768px) 94vw, (max-width: 1200px) 45vw, 42vw"
              className={`${styles.activeHeroImage} ${isTransitioning ? styles.imageTransitioning : ''}`}
            />
          </div>

          {/* Right: Stage Information & Narrative (approx 35-40% width) */}
          <div className={styles.stageInfoColumn} aria-live="polite">
            {/* Subtle botanical line art illustration (watermark) */}
            <svg
              className={styles.botanicalWatermark}
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M130 150 C115 110 85 70 50 40 C35 25 20 15 10 10"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d="M95 90 C110 75 130 65 145 60"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M65 55 C55 35 45 25 35 20"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
              {/* Cotton boll 1 */}
              <path
                d="M45 42 C40 30 50 18 65 20 C75 15 90 22 92 35 C100 40 102 55 92 65 C85 72 70 70 65 65 C55 70 42 62 45 42 Z"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="currentColor"
                fillOpacity="0.04"
              />
              <path
                d="M65 20 C68 35 70 45 65 65"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeDasharray="2 3"
              />
              {/* Cotton boll 2 */}
              <path
                d="M115 62 C115 50 125 42 138 45 C146 42 156 50 154 60 C158 68 152 78 144 80 C136 82 126 78 122 72 C116 74 112 68 115 62 Z"
                stroke="currentColor"
                strokeWidth="1"
                fill="currentColor"
                fillOpacity="0.04"
              />
            </svg>

            {/* Stage Eyebrow */}
            <span className={`${styles.stageEyebrow} ${isTransitioning ? styles.contentFading : ''}`}>
              STAGE
            </span>

            {/* Stage Large Number */}
            <div className={`${styles.stageBigNumber} ${isTransitioning ? styles.contentFading : ''}`}>
              {formattedStageNum}
            </div>

            {/* Stage Title */}
            <h3 className={`${styles.stageTitle} ${isTransitioning ? styles.contentFading : ''}`}>
              {current.title}
            </h3>

            {/* Stage Description */}
            <p className={`${styles.stageDesc} ${isTransitioning ? styles.contentFading : ''}`}>
              {current.desc}
            </p>

            {/* Stage Action CTA */}
            <div className={styles.ctaWrapper}>
              <Link href="/textiles" className={styles.exploreStageCta}>
                EXPLORE THIS STAGE
                <span className={styles.ctaArrow} aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            {/* Editorial Watermark Tag */}
            <div className={styles.editorialWatermark} aria-hidden="true">
              <span>SMALL</span>
              <span>HANDS</span>
              <span>BIG</span>
              <span>POSSIBILITIES</span>
            </div>
          </div>
        </div>

        {/* Floating Right Navigation Button */}
        <button
          type="button"
          className={`${styles.floatingArrowBtn} ${styles.floatingArrowNext}`}
          onClick={handleNext}
          aria-label="Next stage"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* ===================================================================
          2. BOTTOM THUMBNAIL NAVIGATION: 8 COMPACT STAGE BUTTONS
          =================================================================== */}
      <nav
        className={styles.thumbnailNavigationRow}
        role="tablist"
        aria-label="Direct stage navigation for all 8 stages"
      >
        {items.map((st, idx) => {
          const num = String(idx + 1).padStart(2, '0');
          const isActive = idx === activeIndex;

          return (
            <button
              key={st.stage}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Jump to stage ${num}: ${st.title}`}
              className={`${styles.thumbnailItemBtn} ${isActive ? styles.thumbnailItemActive : ''}`}
              onClick={() => goToStage(idx)}
            >
              <span className={styles.thumbStepNum}>{num}</span>

              <div className={styles.thumbCircleWrapper}>
                <Image
                  src={st.image}
                  alt=""
                  fill
                  sizes="48px"
                  className={styles.thumbCircleImg}
                />
              </div>

              <span className={styles.thumbStepTitle}>{st.title}</span>
            </button>
          );
        })}
      </nav>

      {/* ===================================================================
          3. REFINED EDITORIAL PROGRESS INDICATOR (01 / 08 + PROGRESS LINE)
          =================================================================== */}
      <div className={styles.progressIndicatorRow} aria-label="Carousel progress">
        <div className={styles.progressNumberBox} aria-hidden="true">
          <span className={styles.progressActive}>{formattedStageNum}</span>
          <span className={styles.progressSlash}>/</span>
          <span className={styles.progressTotal}>{totalStages}</span>
        </div>

        <div className={styles.progressBarTrack} role="progressbar" aria-valuenow={activeIndex + 1} aria-valuemin={1} aria-valuemax={items.length}>
          <div
            className={styles.progressBarFill}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Mobile-only inline navigation controls */}
      <div className={styles.mobileNavControlsRow}>
        <button
          type="button"
          className={styles.mobileCtrlBtn}
          onClick={handlePrev}
          aria-label="Previous stage"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span>PREV</span>
        </button>

        <span className={styles.mobileStepCounter} aria-hidden="true">
          {formattedStageNum} / {totalStages}
        </span>

        <button
          type="button"
          className={styles.mobileCtrlBtn}
          onClick={handleNext}
          aria-label="Next stage"
        >
          <span>NEXT</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};
