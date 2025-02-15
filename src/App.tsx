import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";
import { AssignmentDetails } from "./types";

function App() {
    const [assignmentList, setAssignmentList] = useState<AssignmentDetails[]>([]);

    return (
        <>
            <Header setAssignmentList={setAssignmentList} />
            <Assignments
                assignments={assignmentList}
                setAssignmentList={setAssignmentList} />
        </>
    );
}

export default App;