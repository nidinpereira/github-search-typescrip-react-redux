import "./issue-card.component.scss";
import GithubIssue from "../../models/github-issues.model";
/**
 * @returns JSX.Element
 * @param issue of type GithubIssue
 * Issue Card Component
 *
 */
 export function IssueCard(issue: GithubIssue): JSX.Element {
  return (
      <div className="card">
          <div className="cardImage"><img src={issue.user.avatar_url} alt="card_image"/></div>
          <div className="cardContent">
              <h2 className="cardTitle">{issue.title}</h2>
              <h3 className="cardSubTitle">{issue.user.login}</h3>
              <a className="btn cardBtn" href={issue.html_url}>
              View Issue
          </a>
          </div>
      </div>
  );
}
