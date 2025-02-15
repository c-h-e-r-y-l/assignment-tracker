import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { AssignmentDetails } from "../../types";

type AssignmentsProps = {
    assignments: AssignmentDetails[];
    setAssignmentList: React.Dispatch<React.SetStateAction<AssignmentDetails[]>>;
}

export function Assignments({ assignments, setAssignmentList }: AssignmentsProps) {
    const numOfAssignments = assignments.length;

    function completeCount(assignments: AssignmentDetails[]): number {
        return assignments.filter(a => a.completed).length;
    }

    return (
        <section className={styles.assignments}>
            <header className={styles.header}>
                <div>
                    <p>Created Assignments</p>
                    <span>{numOfAssignments}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Completed Assignments</p>
                    <span>{completeCount(assignments)} of {numOfAssignments}</span>
                </div>
            </header>

            <div className={styles.list}>
                {assignments.map((assignment) => (
                    <Assignment
                        key={assignment.id}
                        data={assignment.text}
                        id={assignment.id}
                        completed={assignment.completed}
                        setAssignmentList={setAssignmentList}
                    />
                ))}
            </div>
        </section>
    );
}
