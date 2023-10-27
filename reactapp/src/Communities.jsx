import React, { Component } from 'react';
import "./Communities.css"; 
export default class GetAllCommunities extends Component {
    static displayName = GetAllCommunities.name;

    constructor(props) {
        super(props);
        this.state = { communities: [], loading: true };
    }

    componentDidMount() {
        this.populateCommunities();
    }

    static renderCommunitiesTable(communities) {
        // Reverse the order of the communities array
        const reversedCommunities = communities.slice().reverse();

        return reversedCommunities.map((community) => (
            <div className="card_container post_cards list_view" key={community.id}>
                <div id="post-card" className="card post_card public">
                    <a href="" className="wrapper card_content" target="_self" title={community.title}>
                        <span className="post_info">
                            <span className="post_title">{community.title}</span>
                            <span className="post_excerpt">
                                {community.text}
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        ));
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
            : GetAllCommunities.renderCommunitiesTable(this.state.communities);

        return (
            <main id="blog-post" className="section reveal white active">
                <div id="main-content" className="wrapper center">
                    {contents}
                </div>
            </main>
        );
    }

    async populateCommunities() {
        const response = await fetch('Communities/getAllCommunities');
        const data = await response.json();
        this.setState({ communities: data, loading: false });
    }
}