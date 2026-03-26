import { getAllPosts, PostItem as MDPostItem } from '../libs/post';

const mapRemarkToBlogs = (allMarkdownRemark: MDPostItem[] = []) => {
    return allMarkdownRemark.map(
        ({ slug, frontmatter: { title, date, path, published } }) => {
            return {
                createdAt: date,
                id: slug,
                title,
                url: path ?? '',
                published,
                isExternal: false,
            };
        }
    );
};

export const fetchMD = async () => {
    const response = await getAllPosts();
    const data = mapRemarkToBlogs(response);
    return data;
};