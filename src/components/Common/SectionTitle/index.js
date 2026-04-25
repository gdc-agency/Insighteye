const SectionTitle = (props) => {
    const { titleClass, subtitleClass, descClass, secondDescClass, effectClass } = props;
    return (
        <div className={props.sectionClass}>
            { subtitleClass ? <span className={props.subtitleClass}>{props.subtitle}</span> : ''}
            { titleClass ? <h2 className={props.titleClass}>{props.title}</h2> : ''}
            { descClass ? <div className={props.descClass}>{props.description}</div> : ''}
            { secondDescClass ? <div className={props.secondDescClass}>{props.secondDescription}</div> : ''}
            { effectClass ? <div className={props.effectClass}></div> : ''}
        </div>
    );
}

export default SectionTitle