// app/components/IconSelector.tsx

import Image from 'next/image';
import { PropsIconSelector } from '../types/types';

const IconSelector: React.FC<PropsIconSelector> = ({ icons, selectedIcon, onIconSelect }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 p-8">
            {icons.map((icon) => (
                <div
                    key={icon.id}
                    className={`m-2 rounded-full transition duration-300 ease-in-out cursor-pointer
                                    w-20 h-20 sm:w-32 sm:h-32 md:w-28 md:h-28 lg:w-32 lg:h-32 relative  
                                    ${selectedIcon.id === icon.id ? "ring-8 ring-green-400 shadow-[0_0_40px_10px_rgba(0,255,0,0.5)] scale-110 " : ""}`}
                    onClick={() => onIconSelect(icon)}
                >
                    <div className="rounded-full overflow-hidden w-full h-full relative">
                        <Image src={icon.src} alt={icon.alt} fill style={{ objectFit: 'cover' }} sizes="100vw" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IconSelector;