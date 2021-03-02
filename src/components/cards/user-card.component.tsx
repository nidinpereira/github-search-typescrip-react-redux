import "./user-card.component.scss";
import GithubUser from "../../models/github-user.model";

/**
 * @returns JSX.Element
 * @param user of type GithubUser
 * User card component
 *
 */
export function UserCard(user: GithubUser): JSX.Element {
    return (
        <div className="card">
            <div className="cardImage"><img src={user.avatar_url} alt="card_image"/></div>
            <div className="cardContent">
                <h2 className="cardTitle">{user.login}</h2>
                <a className="btn cardBtn" href={user.html_url}>
                    View User
                </a>
            </div>
        </div>
    );
}
