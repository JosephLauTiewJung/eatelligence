const Tag = ({ tag }) => {
    return (
        <span className={`px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide shadow-sm ${tag.color}`}>
      {tag.label}
    </span>
    );
};

export default Tag;
