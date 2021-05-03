import React from "react";

const Repository = ({ result }) => (
    <div className="flex">
        <div>
            <img src={result.owner.avatar_url} width="150" alt="Error" />
        </div>
        <div className="content">
            <div className="title margin-top">
                {result.full_name}
                <span className="git-url"> {result.git_url}</span>
            </div>
            <div className="updated margin-top">
                <span>Last Updated:  {result.updated_at}</span>
            </div>
            <div className="margin-top">
                {result.description}
            </div>
            <div className="margin-top">
                <a
                    href={result.html_url}
                    rel="noreferrer noopener"
                    target="_blank"
                    className="link"
                >
                    Visit Repository
                </a>
            </div>
        </div>
    </div>

);

export default Repository;