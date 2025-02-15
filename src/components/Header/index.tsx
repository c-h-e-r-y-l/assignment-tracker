import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";
import { AssignmentDetails } from "../../types";

type HeaderProps = {
    setAssignmentList: React.Dispatch<React.SetStateAction<AssignmentDetails[]>>;
}

export function Header({ setAssignmentList }: HeaderProps) {
    const [inputText, setInputText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setAssignmentList((prev) => [...prev, { id: prev.length + 1, text: inputText, completed: false }]);
        setInputText('');
    };

    return (
        <header className={styles.header}>
            {/* This is simply to show you how to use helper functions */}
            <h1>{uppercase("bcit")} Assignment Tracker</h1>
            <form className={styles.newAssignmentForm} onSubmit={handleSubmit}>
                <input
                    placeholder="Add a new assignment"
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button disabled={!inputText.trim()}>
                    Create <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    );
}
