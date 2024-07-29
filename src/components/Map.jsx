import React, { useEffect, useRef, useState } from 'react';
import '@arcgis/core/assets/esri/themes/dark/main.css';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';
import Graphic from '@arcgis/core/Graphic';
import Point from '@arcgis/core/geometry/Point';
import Heading from './Heading';

const Map = () => {
    const mapDiv = useRef(null);
    const [zoom, setZoom] = useState(11);

    useEffect(() => {
        if (mapDiv.current) {
            const webmap = new WebMap({
                portalItem: {
                    id: 'e691172598f04ea8881cd2a4adaa45ba',
                },
            });

            const view = new MapView({
                container: mapDiv.current,
                map: webmap,
                center: [85.309562, 23.344101],
                zoom: zoom,
            });
            const point = new Point({
                longitude: 85.309562,
                latitude: 23.344101,
            });

            const markerSymbol = {
                type: 'simple-marker',
                color: "#836FFF",
                outline: {
                    color: [255, 255, 255],
                    width: 1,
                },
            };

            const pointGraphic = new Graphic({
                geometry: point,
                symbol: markerSymbol,
            });

            view.graphics.add(pointGraphic);

            return () => {
                if (view) {
                    view.destroy();
                }
            };
        }
    }, [zoom]);

    return (
        <div className='max-md:max-w-screen-sm overflow-hidden p-4'>
            <Heading name={'where'} />
            <section className="flex flex-col items-center w-full">

                <div className="relative w-[150%] h-96  rounded-3xl border border-blackFade bg-blackFade overflow-hidden shadow-lg">
                    <div ref={mapDiv} className="w-full h-full" />
                    <h2 className="text-lg flex font-extralight mb-2 px-2 p-1 absolute z-50 top-3 right-4 bg-white text-black rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#836FFF" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        Ranchi

                    </h2>
                </div>
            </section>
        </div>

    );
};

export default Map;
