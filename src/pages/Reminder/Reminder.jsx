export const Reminder = () => {
    return (
        <main>
            <section>
                <div className="container">
                    <span>Date</span>
                    <h2 className="subtitle">Today</h2>
                    <ul className="grid grid-col-5 gap-m">
                        <li className="item item-category">
                            <span>Day</span>
                            <span>00</span>
                        </li>
                        <li className="item item-category">
                            <span>Day</span>
                            <span>00</span>
                        </li>
                        <li className="item item-category">
                            <span>Day</span>
                            <span>00</span>
                        </li>
                        <li className="item item-category">
                            <span>Day</span>
                            <span>00</span>
                        </li>
                        <li className="item item-category">
                            <span>Day</span>
                            <span>00</span>
                        </li>
                    </ul>
                </div>
                <div className="container">
                    <h2 className="subtitle">Daily Task's</h2>
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
