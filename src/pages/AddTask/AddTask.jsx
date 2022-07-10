export const AddTask = () => {
    return (
        <main>
            <section>
                <form action="">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" />
                    <label htmlFor="date">Schedule date</label>
                    <input type="date" name="date" id="date" />
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description"></textarea>
                </form>
            </section>
        </main>
    )
}
