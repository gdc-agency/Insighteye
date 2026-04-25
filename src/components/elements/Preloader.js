export default function Preloader() {
    return (
        <>
            {/*preloader */}
            <div className="loader-wrap">
                <div className="preloader">
                    <div className="preloader-close">X</div>
                    <div id="handle-preloader" className="handle-preloader">
                        <div className="animation-preloader">
                            <div className="spinner"></div>
                            <div className="txt-loading">
                                <span data-text-preloader="i" className="letters-loading">
                                    i
                                </span>
                                <span data-text-preloader="n" className="letters-loading">
                                    n
                                </span>
                                <span data-text-preloader="s" className="letters-loading">
                                    s
                                </span>
                                <span data-text-preloader="i" className="letters-loading">
                                    i
                                </span>
                                <span data-text-preloader="g" className="letters-loading">
                                    g
                                </span>
                                <span data-text-preloader="h" className="letters-loading">
                                    h
                                </span>
                                <span data-text-preloader="t" className="letters-loading">
                                    t
                                </span>
                                <span data-text-preloader="e" className="letters-loading">
                                    e
                                </span>
                                <span data-text-preloader="y" className="letters-loading">
                                    y
                                </span>
                                <span data-text-preloader="e" className="letters-loading">
                                    e
                                </span>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
            {/*preloader end */}


        </>
    )
}
