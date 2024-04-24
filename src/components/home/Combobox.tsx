import { useState } from "react";
import Input from "../ui/Input";
import Arrow from "../ui/icons/Arrow";
import Check from "../ui/icons/Check";

interface Props {
    data: [
        {
            id: number;
            userId: number;
            title: string;
            body: string;
        }
    ]
}

const Combobox: React.FC<Props> = ({ data }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [searching, setSearching] = useState<boolean>(false);
    const [search, setSearch] = useState<string>(data[0].title);
    const [selected, setSelected] = useState<string>(data[0].title);

    const toggleComboItems = () => {
        setOpen(prev => !prev);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setOpen(true);
        setSearching(true);
    }

    const handleSelect = (title: string) => {
        setSearch(title);
        setSelected(title);
        setOpen(false);
    }

    return (<div className="combo">
        {open && <div className="overlay" onClick={toggleComboItems}></div>}
        <div className="items-container">
            <Input
                type="text"
                value={search}
                hasRightIcon={true}
                clickableIcon={true}
                icon={<Arrow />}
                handleClick={toggleComboItems}
                onChange={handleChange}
            />
            {open && <>
                <div className={"items"}>
                    {searching ? data.filter((item) => item.title.includes(search)).length === 0 ?
                        <span className="item">no data found</span> :
                        data.filter((item) => item.title.includes(search)).map((item) =>
                            <button
                                key={item.id}
                                className={`item ${(selected === item.title || data.filter((item) => item.title.includes(search)).length === 1) && "item-active"}`}
                                onClick={() => handleSelect(item.title)}
                            >
                                {selected === item.title ? <Check /> : <span className="icon">{" "}</span>}
                                <span className="title">{item.title}</span>
                            </button>)
                        : data.map(item => <button
                            key={item.id}
                            className={`item ${selected === item.title && "item-active"}`}
                            onClick={() => handleSelect(item.title)}
                        >
                            {selected === item.title ? <Check /> : <span className="icon">{" "}</span>}
                            <span className="title">{item.title}</span>
                        </button>)}
                </div>
            </>}
        </div>
    </div>)
}

export default Combobox;