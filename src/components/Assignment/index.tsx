import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AssignmentDetails } from "../../types";

type AssignmentProps = {
    setAssignmentList: React.Dispatch<React.SetStateAction<AssignmentDetails[]>>;
    data: string;
    id: number;
    completed: boolean;

}

export function Assignment({ data, id, completed, setAssignmentList }: AssignmentProps) {
    const handleCompleteClick = (id: number) => {
        setAssignmentList((prev) => prev.map((assignment) =>
            assignment.id === id ? { ...assignment, completed: !assignment.completed } : assignment
        ));
    }

    const handleDeleteClick = (id: number) => {
        setAssignmentList((prev) => prev.filter((assignment) => assignment.id !== id))
    }

    return (
        <div className={styles.assignment}>
            <button className={styles.checkContainer} onClick={() => handleCompleteClick(id)}>
                {completed && <BsFillCheckCircleFill className={styles.checkmark} />}
                <div />
            </button>

            <p className={completed ? styles.textCompleted : ''}>{data}</p>

            <button className={styles.deleteButton} onClick={() => handleDeleteClick(id)}>
                <TbTrash size={20} />
            </button>
        </div>
    );
}
