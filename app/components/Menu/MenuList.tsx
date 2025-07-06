import { type FC } from 'react';

interface MenuItem {
    title: string;
    note: string;
    portion: string;
}

interface MenuListProps {
    title: string;
    items: MenuItem[];
}

const MenuList: FC<MenuListProps> = ({ title, items }) => {
    return (
        <div>
            <h4 className="p-2 bg-white text-black text-2xl text-center">{title}</h4>
            <ul className="flex flex-col w-full gap-4 pt-6">
                {items.map((item) => (
                    <li className="font-normal" key={item.title}>
                        <div className="flex justify-between text-lg">
                            <span>{item.title}</span>
                            {item.portion}
                        </div>
                        <div className="text-green-300 text-md">{item.note}</div>
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default MenuList;
