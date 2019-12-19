tooltipFormatter(externalParams: Array<object>): void {
    
    this.hardOption.tooltip.formatter = params => {
      let elem = [];
      elem.push('<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'
        + params.color + ';"></span>  ' + params.seriesName);
      params.data.forEach((element, index) => {
        if (externalParams[index] != undefined) {
          elem.push('<span style="color:#abaeb3;font-size: 13px;">' +
            (typeof externalParams[index] == 'string' ? externalParams[index] : externalParams[index]['columns']) +
            '</span>' + '  :  ' + '<span style="font-weight: bold;">' + element + '</span>');
        }
      });
      if (this.selectedGraphType == 'Scatter' && externalParams[3] != undefined) {
        elem.push(this.tooltipHTMLTemplate(externalParams[3],params.seriesName ));
      }
      return elem.join('<br/>');
    };
  };

  tooltipHTMLTemplate(property:any,value:any):string {
    return '<span style="color:#abaeb3;font-size: 13px;">' + property + '</span>'
    + '  :  ' + '<span style="font-weight: bold;">' + value + '</span>';
  };