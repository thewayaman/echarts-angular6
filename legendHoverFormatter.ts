  legendFormatter(): void {

    /* Enables tooltip specifically for legends pane ,should be moved to backend later on
     */
    this.hardOption.legend.tooltip = { show: true };

    /* Breaks individual legend item if it exceeds a certain character count
     and becomes unreadable in the e-charts pane */
     
    this.hardOption.legend.formatter = name => {
      if (name.length > 22) {
        if (/\s/g.test(name)) {
          return name.split(' ', 2).join('\n');
        } else {
          return name.substr(0, 15) + '\n' + name.substr(15, 3) + '...';
        }
      } else {
        return name;
      }
    };

    /* Used for counting and settting the pagination in cases where the 
    legends can't fit in the e-charts pane  */

    this.hardOption.legend.pageFormatter = current => {
      if (current.total % 2 == 0) {
        return current.current + '/' + current.total;
      } else {
        if (current.current == current.total && this.pageValue == undefined) {
          this.pageValue = true;
          return current.current - 1 + '/' + current.total;
        } else {
          this.pageValue = undefined;
          return current.current + '/' + current.total;
        }
      }
    };
  
  }