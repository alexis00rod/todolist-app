export const Home = () => { 
    return (
        <main>
            <section>
                <div className="container">
                    <h2 className="subtitle">Categories</h2>
                    <ul className="grid grid-col-3 gap-m">
                        <li className="item item-category">
                            <span>10 tasks</span>
                            <h3>Personal</h3>
                            <span>% finnish</span>
                        </li>
                        <li className="item item-category">
                            <span>10 tasks</span>
                            <h3>Work</h3>
                            <span>% finnish</span>
                        </li>
                        <li className="item item-category">
                            <span>10 tasks</span>
                            <h3>Projects</h3>
                            <span>% finnish</span>
                        </li>
                    </ul>
                </div>
                <div className="container">
                    <h2 className="subtitle">Personal Task's</h2>
                    <ul className="flex flex-col gap-s">
                        <li className="item item-task">
                            <input type="checkbox" name="" id="" />
                            <h4>Title task</h4>
                            <div>
                                <span>Priority</span>
                                <span>Due date</span>
                            </div>
                        </li>
                        <li className="item item-task">
                            <input type="checkbox" name="" id="" />
                            <h4>Title task</h4>
                            <div>
                                <span>Priority</span>
                                <span>Due date</span>
                            </div>
                        </li>
                        <li className="item item-task">
                            <input type="checkbox" name="" id="" />
                            <h4>Title task</h4>
                            <div>
                                <span>Priority</span>
                                <span>Due date</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}
