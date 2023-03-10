import React, {useState, useEffect} from "react";

// class PresentationForm extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: '',
//             email: '',
//             company: '',
//             title: '',
//             synopsis: '',
//             conferences: [],
//         }
//         this.handleNameChange = this.handleNameChange.bind(this);
//         this.handleEmailChange = this.handleEmailChange.bind(this);
//         this.handleCompanyChange = this.handleCompanyChange.bind(this);
//         this.handleTitleChange = this.handleTitleChange.bind(this);
//         this.handleSynopsisChange = this.handleSynopsisChange.bind(this);
//         this.handleConferenceChange = this.handleConferenceChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     async handleSubmit(event) {
//         event.preventDefault();
//         const data = { ...this.state };
//         data.presenter_name = data.name;
//         data.presenter_email = data.email;
//         data.company_name = data.company
//         let conferenceHref = data.conference
//         console.log(data)

//         delete data.name;
//         delete data.email;
//         delete data.company;
//         delete data.conferences;


//         const locationUrl = `http://localhost:8000${conferenceHref}presentations/`
//         const fetchConfig = {
//             method: 'post',
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         }
//         const response = await fetch(locationUrl, fetchConfig);
//         if (response.ok) {
//             const newPresentation = await response.json();
//             console.log(newPresentation)

//             const cleared = {
//                 name: '',
//                 email: '',
//                 company: '',
//                 title: '',
//                 synopsis: '',
//                 conference: '',
//             };
//             this.setState(cleared)
//         }

//     }

//     handleNameChange(event) {
//         const value = event.target.value;
//         this.setState({ name: value })
//     }

//     handleEmailChange(event) {
//         const value = event.target.value;
//         this.setState({ email: value })
//     }

//     handleCompanyChange(event) {
//         const value = event.target.value;
//         this.setState({ company: value })
//     }

//     handleTitleChange(event) {
//         const value = event.target.value;
//         this.setState({ title: value })
//     }

//     handleSynopsisChange(event) {
//         const value = event.target.value;
//         this.setState({ synopsis: value })
//     }

//     handleConferenceChange(event) {
//         const value = event.target.value;
//         this.setState({ conference: value })
//     }

//     async componentDidMount() {
//         let url = 'http://localhost:8000/api/conferences/';
//         let response = await fetch(url);
//         if (response.ok) {
//             let data = await response.json();
//             this.setState({ conferences: data.conferences })
//         }
//     }

//     render() {
//         return (
//             <div className="row">
//                 <div className="offset-3 col-6">
//                     <div className="shadow p-4 mt-4">
//                         <h1>Create a new presentation</h1>
//                         <form onSubmit={this.handleSubmit} id="create-presentation-form">
//                             <div className="form-floating mb-3">
//                                 <input onChange={this.handleNameChange} value={this.state.name} placeholder="Name" required type="text" name="presenter_name" id="presenter_name" className="form-control" />
//                                 <label htmlFor="Name">Presenter name</label>
//                             </div>
//                             <div className="form-floating mb-3">
//                                 <input onChange={this.handleEmailChange} value={this.state.email} placeholder="Email" required type="email" name="presenter_email" id="presenter_email" className="form-control" />
//                                 <label htmlFor="Email">Presenter email</label>
//                             </div>
//                             <div className="form-floating mb-3">
//                                 <input onChange={this.handleCompanyChange} value={this.state.company} placeholder="Company" type="text" name="company_name" id="company_name" className="form-control" />
//                                 <label htmlFor="Company">Company name</label>
//                             </div>
//                             <div className="form-floating mb-3">
//                                 <input onChange={this.handleTitleChange} value={this.state.title} placeholder="Title" required type="text" name="title" id="title" className="form-control" />
//                                 <label htmlFor="Title">Title</label>
//                             </div>
//                             <div className="form-floating mb-3">
//                                 <textarea onChange={this.handleSynopsisChange} value={this.state.synopsis} className="form-control" name="synopsis" id="synopsis" rows="3"></textarea>
//                                 <label htmlFor="synopsis">Synopsis</label>
//                             </div>
//                             <div className="mb-3">
//                                 <select onChange={this.handleConferenceChange} value={this.state.conference} required name="conference" id="conference" className="form-select">
//                                     <option value="">Choose a conference</option>
//                                     {this.state.conferences.map(conference => {
//                                         return (
//                                             <option key={conference.href} value={conference.href}>
//                                                 {conference.name}
//                                             </option>
//                                         )
//                                     })}
//                                 </select>
//                             </div>
//                             <button className="btn btn-primary">Create</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default PresentationForm

export default function PresentationForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [title, setTitle] = useState('');
    const [synopsis, setSynopsis] = useState('');
    const [conferences, setConferences] = useState([]);
    const [conference, setConference] = useState('');

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value)
    }

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value)
    }

    const handleCompanyChange = (e) => {
        const value = e.target.value;
        setCompany(value)
    }

    const handleTitleChange = (e) => {
        const value = e.target.value;
        setTitle(value)
    }

    const handleSynopsisChange = (e) => {
        const value = e.target.value;
        setSynopsis(value)
    }

    const handleConferenceChange = (e) => {
        const value = e.target.value;
        setConference(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {};
        data.presenter_name = name;
        data.presenter_email = email;
        data.company_name = company;
        data.conference = conference;
        data.title = title;
        data.synopsis = synopsis;
        console.log(data)

        const locationUrl = `http://localhost:8000${conference}presentations/`
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(locationUrl, fetchConfig);
        if (response.ok) {
            const newPresentation = await response.json();
            console.log(newPresentation)

            setName('');
            setEmail('');
            setCompany('');
            setTitle('');
            setSynopsis('');
            setConference('');
        }
    }

    const fetchData = async () => {
        const url = 'http://localhost:8000/api/conferences/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setConferences(data.conferences);
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    
    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a new presentation</h1>
                    <form onSubmit={handleSubmit} id="create-presentation-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="presenter_name" id="presenter_name" className="form-control" />
                            <label htmlFor="Name">Presenter name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleEmailChange} value={email} placeholder="Email" required type="email" name="presenter_email" id="presenter_email" className="form-control" />
                            <label htmlFor="Email">Presenter email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleCompanyChange} value={company} placeholder="Company" type="text" name="company_name" id="company_name" className="form-control" />
                            <label htmlFor="Company">Company name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleTitleChange} value={title} placeholder="Title" required type="text" name="title" id="title" className="form-control" />
                            <label htmlFor="Title">Title</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea onChange={handleSynopsisChange} value={synopsis} placeholder="Synopsis" className="form-control" name="synopsis" id="synopsis" rows="3"></textarea>
                            <label htmlFor="synopsis">Synopsis</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleConferenceChange} value={conference} required name="conference" id="conference" className="form-select">
                                <option value="">Choose a conference</option>
                                {conferences.map(conference => {
                                    return (
                                        <option key={conference.href} value={conference.href}>
                                            {conference.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )

}