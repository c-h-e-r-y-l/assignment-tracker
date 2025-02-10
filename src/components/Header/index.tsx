import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";

export function Header() {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    const isInputEmpty = !inputText.trim();

    return (
        <header className={styles.header}>
            {/* This is simply to show you how to use helper functions */}
            <h1>{uppercase("bcit")} Assignment Tracker</h1>
            <form className={styles.newAssignmentForm}>
                <input 
                    placeholder="Add a new assignment"
                    type="text"
                    value={inputText}
                    onChange={handleInputChange} />
                <button disabled={isInputEmpty}>
                    Create <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    );
}
