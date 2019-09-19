import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0 10px 0;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin-right: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  .topic-img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 140px;
    height: 100px;
    float: right;
    border-radius: 5px;
    margin-left: 10px;
  }
`;

export const ListInfo = styled.div`
  float: left;
  width: 460px;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${props => props.imgUrl});
  background-size: contain;
  margin-bottom: 10px;
`;

export const CodeWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #f0f0f0;
  background: #fff;
  border-radius: 6px;
  padding: 10px 22px;
  margin-bottom: 20px;
  .code {
    width: 60px;
    height: 60px;
    opacity: 0.85;
    vertical-align: middle;
  }
`;

export const CodeInfo = styled.div`
  display: inline-block;
  margin-left: 7px;
  vertical-align: middle;
  .title {
    font-size: 15px;
    color: #333;
  }
  .desc {
    margin-top: 4px;
    font-size: 13px;
    color: #999;
  }
`;

export const WriterWrapper = styled.div`
  margin-top: 10px;
`;

export const WriterTitle = styled.div`
  padding: 10px 0;
  font-size: 14px;
  line-height: 14px;
  color: #969696;
  overflow: hidden;
  .switch {
    float: right;
    .iconfont {
      margin-right: 5px;
      font-size: 12px;
    }
  }
`;

export const WriterItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  .avatar {
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
`;

export const WriterInfo = styled.div`
  flex: 1;
  margin-left: 10px;
  position: relative;
  .name {
    color: #333;
    font-size: 14px;
    padding-top: 5px;
    overflow: hidden;
    .pick {
      float: right;
      color: #42c02e;
      font-size: 13px;
    }
  }
  .like {
    color: #969696;
    font-size: 12px;
    margin-top: 2px;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
`;
