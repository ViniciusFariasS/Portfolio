import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../services/firebaseConfig";

import { collection, getDocs } from "firebase/firestore";
import Card from "../components/Card";

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(function () {
        getProjects();
    }, [])

    useEffect(() => {
        console.log(projects);
    }, [projects])


    const getProjects = () => {
        const projectsCollectionRef = collection(db, 'Projects');
        getDocs(projectsCollectionRef).then(response => {
            const project = response.docs.map(doc => ({ data: doc.data(), id: doc.id, }));
            setProjects(project);

        }).catch(error => console.log(error.message))
    }

    return (
        <PROJECTS>
            {projects.map(project => (
                <Card
                    key={project.id}
                    title={project.data.Name}
                    content={project.data.About}
                />
            ))}
        </PROJECTS>
    )
}

const PROJECTS = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 25px;
    margin-left: 10px;
    overflow-y: scroll;
`

