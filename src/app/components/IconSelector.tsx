import Image from 'next/image';

// Interfaccia per definire il tipo di dato per le icone
interface IconData {
    src: string;
    alt: string;
    id: string;
}

// Componente riutilizzabile per la selezione dell'icona
const IconSelector: React.FC<{ 
    icons: IconData[]; 
    selectedIcon: IconData; 
    onIconSelect: (icon: IconData) => void; 
}> = ({ icons, selectedIcon, onIconSelect }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 p-8">
            {icons.map((icon) => (
                <div 
                    key={icon.id} 
                    className={`p-2 rounded-full transition duration-300 ease-in-out cursor-pointer
                                ${selectedIcon.id === icon.id ? "bg-amber-700 shadow-inner scale-110" : ""}`}
                    onClick={() => onIconSelect(icon)} 
                >
                    <div className="rounded-full overflow-hidden bg-amber-700 w-full relative w-[100px] h-[100px]"> 
                        <Image src={icon.src} alt={icon.alt} fill style={{ objectFit: 'cover' }}/> 
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IconSelector;