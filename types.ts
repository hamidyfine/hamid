type TNavItem = {
    slug: string;
    href: string;
};

export type TNavigation = {
    [k: string]: TNavItem;
};

export type TFields = 'slug' | 'title' | 'date' | 'content' | 'excerpt' | 'coverImage' | 'ogImage' | 'author' | 'tags' | 'category' | 'readingTime' | 'update';

export type TPost = {
    slug: string;
    title?: string;
    date?: string;
    update?: string;
    content?: string;
    excerpt?: string;
    coverImage?: string;
    author?: {
        name: string;
        avatar: string;
    };
    ogImage?: {
        url: string;
    };
    tags?: string;
    category?: string;
    readingTime?: string;
};

export type TSocialItem = {
    href: string;
    icon: JSX.Element;
};

export type TSocials = {
    [k: string]: TSocialItem;
};

type TProjectOwner = {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
};

export type TProject = {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: TProjectOwner;
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage?: string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    has_issues: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    has_discussions: boolean;
    forks_count: number;
    mirror_url?: string;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license?: string;
    allow_forking: boolean;
    is_template: boolean;
    web_commit_signoff_required: boolean;
    topics?: string[];
    visibility: string;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
};

export type TExperience = {
    title: string;
    company: string;
    location: string;
    start_date: string;
    end_date: string;
    duration: string;
    stack: string[];
    description: string[];
};

export type TLanguage = {
    name: string;
    level: string;
};

export type TCertificate = {
    title: string;
    link: string;
    issue_date: string;
    source: string;
};
