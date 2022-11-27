marked.setOptions({
    "baseUrl": null,
    "breaks": true,
    "gfm": true,
    "headerIds": true,
    "headerPrefix": "",
    "highlight": null,
    "langPrefix": "language-",
    "mangle": true,
    "pedantic": false,
    "sanitize": false,
    "sanitizer": null,
    "silent": false,
    "smartLists": false,
    "smartypants": false,
    "xhtml": false
});

class Presentational extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: `# Markdown Previewer
## About this project:
This is 1 of 5 certification projects from [freeCodeCamp](https://www.freecodecamp.org/) "Front End Development Libraries"

Complete these 5 projects to earn your certification
- Build a **Random Qoute Machine**
- Build a **Markdown Previewer**
- Build a **Drum Machine**
- Build a **Javascript Calculator**
- Build a **25 + 5 Clock**

Use these tools to build your projects:

\`Bootstrap\` \`Bootstrap\` \`jQuery\` \`Sass\` \`React\` \`Redux\`

>You don't need to parse Markdown yourself - you can import the Marked library for here:
\`\`\`
<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/4.2.3/marked.min.js"></script>
\`\`\`

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSizing = this.handleSizing.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }
    handleSizing(event) {
        console.log(event.currentTarget.name)
        console.log(document.getElementById(event.currentTarget.name))
        if (event.currentTarget.classList.contains("fa-window-minimize")) {
            event.currentTarget.classList.remove("fa-window-minimize");
            event.currentTarget.classList.add("fa-window-restore");
        }
        else {
            event.currentTarget.classList.add("fa-window-minimize");
            event.currentTarget.classList.remove("fa-window-restore");
        }
        document.getElementById(event.currentTarget.name).classList.toggle("minimize");
    }

    render() { 
        return (
            <main id="wrapper">
                <section id="editor-container">
                    <div className="section-header">
                        <p className="section-label">Editor</p>
                        <button name="editor"
                                className="fa-regular fa-window-minimize"
                                onClick={this.handleSizing}
                        />
                    </div>

                    <textarea   id="editor"
                                value={this.state.input}
                                onChange={this.handleChange}
                    />
                </section>

                <section id="preview-container">
                    <div className="section-header">
                        <p className="section-label">Preview</p>
                        <button name="preview"
                                className="fa-regular fa-window-minimize"
                                onClick={this.handleSizing}
                        />
                    </div>
                
                    <div    id="preview" 
                            dangerouslySetInnerHTML={{__html: marked.parse(this.state.input)}} 
                    />
                </section>
            </main>
        )
    }
}



ReactDOM.createRoot(document.getElementById("root")).render(<Presentational />);




