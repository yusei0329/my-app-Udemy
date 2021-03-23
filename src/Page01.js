import React from 'react';
import Article from './Article';


class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      count: 0
    }
  }

  //ボタンがクリックされたらカウントアップする
  componentDidMount() {
    document.getElementById('counter').addEventListener('click', this.countUp)
  }

  componentDidUpdate() {
    if (this.state.count >= 10) {
      this.setState({
        count: 0
      })
    }
  }

  // componentWillUnmount() {
  //   document.getElementById('counter').removeEventListener('click', this.countUp)
  // }

  // 公開状態を反転させる関数
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished
    })
  };


  // //数値を任意の値に変更
  // changeOder = () => {
  //   this.setState({
  //     order : this.state.order + 1
  //   })
  // };

  countUp = () => {
    this.setState({
      count: this.state.count + 1
    })
  }


  render() {
    return (
      <>
        <Article
          title={"Reactの使い方"}
          isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
          count={this.state.count}
        />
      </>
    )
  }
}

export default Blog