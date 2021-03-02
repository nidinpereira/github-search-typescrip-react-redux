import "./repo-card.component.scss";
import GithubRepo from "../../models/github-repo.model";

/**
 * @returns JSX.Element
 * @param repo of type GithubRepo
 * repo card component
 *
 */

export function RepoCard(repo: GithubRepo): JSX.Element {
    return (
      <div className="card">
        <div className="cardImage"><img src={repo.owner.avatar_url} alt="card_image"/></div>
        <div className="cardContent">
          <h2 className="cardTitle">{repo.name}</h2>
          <h3 className="cardSubTitle">{repo.owner.login}</h3>
            <a className="btn cardBtn" href={repo.html_url}>
                View Repo
            </a>
        </div>
      </div>
  );
}
