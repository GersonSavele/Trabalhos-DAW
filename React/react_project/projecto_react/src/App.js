import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Componente simples que renderiza "Hello, World!"
function HelloWorld() {
    return <div > Hello, World! < /div>;
}

// Componente que exibe o nome e a idade
function NameAndAge() {
    const nome = 'Gerson';
    const idade = 25;

    return ( <
        div >
        <
        p > Nome: { nome } < /p> <
        p > Idade: { idade } < /p> <
        HelloWorld / >
        <
        /div>
    );
}

// Componente de contador com estado
function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return ( <
        div >
        <
        p > Número: { count } < /p> <
        button onClick = { increment } > Incrementar < /button> <
        button onClick = { decrement } > Decrementar < /button> <
        /div>
    );
}

// Componente de lista de tarefas com manipulação de eventos
function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');

    const addTask = () => {
        if (taskText) {
            setTasks([...tasks, taskText]);
            setTaskText('');
        }
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return ( <
        div >
        <
        input type = "text"
        value = { taskText }
        onChange = {
            (e) => setTaskText(e.target.value) }
        /> <
        button onClick = { addTask } > Adicionar Tarefa < /button> <
        ul > {
            tasks.map((task, index) => ( <
                li key = { index } > { task } <
                button onClick = {
                    () => removeTask(index) } > Remover < /button> <
                /li>
            ))
        } <
        /ul> <
        /div>
    );
}

// Componente para renderização condicional
function ConditionalRender({ isLoggedIn }) {
    return ( <
        div > {
            isLoggedIn ? ( <
                p > Você está logado. < /p>
            ) : ( <
                p > Você não está logado. < /p>
            )
        } <
        /div>
    );
}

// Componente para layout comum
function CommonLayout({ children }) {
    return ( <
        div >
        <
        Header / > { children } <
        /div>
    );
}

// Componente de cabeçalho
function Header() {
    return ( <
        header >
        <
        h1 > Meu Site < /h1> <
        nav >
        <
        ul >
        <
        li >
        <
        Link to = "/" > Início < /Link> <
        /li> <
        li >
        <
        Link to = "/about" > Acerca < /Link> <
        /li> <
        li >
        <
        Link to = "/contact" > Contacto < /Link> <
        /li> <
        li >
        <
        Link to = "/services" > Serviços < /Link> <
        /li> <
        /ul> <
        /nav> <
        /header>
    );
}

// Páginas
function Home() {
    return <h2 > Página de Início < /h2>;
}

function About() {
    return <h2 > Página Acerca < /h2>;
}

function Contact() {
    return <h2 > Página de Contacto < /h2>;
}

function Services() {
    return <h2 > Página de Serviços < /h2>;
}

// App
function App() {
    useEffect(() => {
        console.log('Componente montado');
        return () => {
            console.log('Componente desmontado');
        };
    }, []);

    return ( <
        Router >
        <
        CommonLayout >
        <
        Route path = "/"
        exact component = { Home }
        /> <
        Route path = "/about"
        component = { About }
        /> <
        Route path = "/contact"
        component = { Contact }
        /> <
        Route path = "/services"
        component = { Services }
        />

        <
        HelloWorld / >
        <
        NameAndAge / >
        <
        Counter / >
        <
        TodoList / >
        <
        ConditionalRender isLoggedIn = { true }
        /> <
        /CommonLayout> <
        /Router>
    );
}

export default App;