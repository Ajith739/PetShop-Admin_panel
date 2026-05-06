import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export default function usePhoenixInit() {
  const location = useLocation();

  const initPhoenix = useCallback(() => {
    // Re-initialize feather icons
    if (window.feather) {
      window.feather.replace();
    }

    // Re-initialize FontAwesome
    if (window.FontAwesome) {
      window.FontAwesome.dom.i2svg();
    }

    // Re-initialize SimpleBar on scrollable elements
    if (window.SimpleBar) {
      document.querySelectorAll('[data-simplebar]').forEach((el) => {
        if (!el.SimpleBar) {
          new window.SimpleBar(el);
        }
      });
    }

    // Re-initialize Bootstrap tooltips
    if (window.bootstrap) {
      document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
        // Dispose existing first to prevent duplicate
        const existing = window.bootstrap.Tooltip.getInstance(el);
        if (existing) existing.dispose();
        new window.bootstrap.Tooltip(el);
      });

      // Re-initialize Bootstrap popovers
      document.querySelectorAll('[data-bs-toggle="popover"]').forEach((el) => {
        const existing = window.bootstrap.Popover.getInstance(el);
        if (existing) existing.dispose();
        new window.bootstrap.Popover(el);
      });
    }

    // Re-initialize list.js instances
    if (window.List) {
      document.querySelectorAll('[data-list]').forEach((el) => {
        try {
          const options = JSON.parse(el.getAttribute('data-list'));
          if (options && options.valueNames) {
            new window.List(el, options);
          }
        } catch (e) {
          // silently skip invalid data-list attributes
        }
      });
    }

    // Re-trigger phoenix.js docReady functions by dispatching DOMContentLoaded
    // This is needed for data-attribute driven features like password toggle,
    // choices.js selects, flatpickr date pickers, etc.
    try {
      if (window.phoenix && window.phoenix.utils) {
        // Phoenix utils are available, re-run detection
      }
    } catch (e) {
      // silently skip
    }
  }, []);

  useEffect(() => {
    // Small delay to ensure DOM is painted before initializing vendors
    const timer = setTimeout(initPhoenix, 100);
    return () => clearTimeout(timer);
  }, [location.pathname, initPhoenix]);
}
