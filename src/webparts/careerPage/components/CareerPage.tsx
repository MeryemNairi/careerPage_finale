import * as React from 'react';
import styles from './CareerPage.module.scss';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import  { useEffect, useRef } from 'react';


import FirstBanner from './First Banner/FirstBanner';

import Footer from './NewFooter/Footer';
import Navbar from './Header/navbar';
import Team from './Team/Team';
import Parrainage from './Parrainage Banner/Parrainage';
import Process from './Process/Process';

import JobOffers from './JobsOffers/JobOffers';

const CommPage: React.FC<{ context: WebPartContext }> = ({ context }) => {
    const [showSavoirPlus, setShowSavoirPlus] = React.useState(false);
    const savoirPlusRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Set user property on initial load
        setUserProperty(context.pageContext.user.displayName || 'Anonymous');
        // Track the page view when the component mounts
        trackPageView();
        trackCustomEvent('Initial Load', 'page_view');
    }, []);

    const setUserProperty = (userName: string) => {
        if (typeof window.gtag === 'function') {
            window.gtag('set', { 'user_name': userName });
            // Ensure data layer is updated with user_name
            window.dataLayer.push({ 'user_name': userName });
            console.log("User property set:", userName);
        } else {
            console.warn("gtag function not defined");
        }
    };

    const trackPageView = () => {
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'page_view', {
                page_title: document.title,
                page_path: window.location.pathname,
                user_name: context.pageContext.user.displayName || 'Anonymous',
            });
            console.log("Page view tracked:", {
                page_title: document.title,
                page_path: window.location.pathname,
                user_name: context.pageContext.user.displayName || 'Anonymous',
            });
        } else {
            console.warn("gtag function not defined");
        }
    };

    const trackCustomEvent = (windowName: string, eventType: string) => {
        if (typeof window.gtag === 'function') {
            window.gtag('event', eventType, {
                event_category: 'Window Load',
                event_label: windowName,
                user_name: context.pageContext.user.displayName || 'Anonymous',
                page_title: document.title,
            });
            console.log("Custom event tracked:", {
                eventType,
                event_category: 'Window Load',
                event_label: windowName,
                user_name: context.pageContext.user.displayName || 'Anonymous',
                page_title: document.title,
            });
        } else {
            console.warn("gtag function not defined");
        }
    };

    const handleShowSavoirPlus = () => {
        setShowSavoirPlus(true);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (savoirPlusRef.current && !savoirPlusRef.current.contains(event.target as Node)) {
            setShowSavoirPlus(false);
        }
    };

    useEffect(() => {
        if (showSavoirPlus) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showSavoirPlus]);
    return (
        <div className={styles.CommPage}>
            <Navbar />
            
            <FirstBanner onShowSavoirPlus={handleShowSavoirPlus} />
            <div
                ref={savoirPlusRef}
                className={`${styles.savoirPlusContainer} ${showSavoirPlus ? styles.savoirPlusEnterActive : styles.savoirPlusExitActive}`}
            >
                <Team />
            </div>
            <JobOffers/>
            <Process/>
            <Parrainage/>
            
            
            <Footer />
        </div>
    );
};

export default CommPage;
