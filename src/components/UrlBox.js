import React, { PureComponent } from 'react';

class UrlBox extends PureComponent {
  render() {
    const {
      clearUrl,
      updateUrl,
      index,
      url,
      handleUrlPaste
    } = this.props;

    return (
      <div className="urlui">
        <div className="box">
          <input value={url}
            type="text"
            className={`url u${index + 1}`}
            placeholder={`Input URL ${index + 1}`}
            onChange={updateUrl}
            onPaste={handleUrlPaste} />
        </div>
        <div className="actions" data-uid="1">
          <a className="cabs" href={url}>Go (current)</a>
          <a className="cabs" href={url} target="_blank">Go (new)</a>
          <a className="cabs" onClick={clearUrl}>Clear</a>
        </div>
      </div>
    );
  }
}

export default UrlBox;