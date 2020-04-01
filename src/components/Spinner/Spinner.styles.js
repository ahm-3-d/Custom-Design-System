import styled from "styled-components";

export const EllipsisSpinner = styled.div`
    border-radius: 50%;
    width: 100%;
    height: 100%;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: load7 1.8s infinite ease-in-out;
    animation: load7 1.8s infinite ease-in-out;
    color: ${props => props.theme.primaryColour};
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;


    :before, :after {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation: load7 1.8s infinite ease-in-out;
        animation: load7 1.8s infinite ease-in-out;
        content: '';
        position: absolute;
        top: 0;
    }

    :before {
        left: -3.5em;
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
    }
    :after {
        left: 3.5em;
    }

    @-webkit-keyframes load7 {
        0%,
        80%,
        100% {
          box-shadow: 0 2.5em 0 -1.3em;
        }
        40% {
          box-shadow: 0 2.5em 0 0;
        }
      }
      @keyframes load7 {
        0%,
        80%,
        100% {
          box-shadow: 0 2.5em 0 -1.3em;
        }
        40% {
          box-shadow: 0 2.5em 0 0;
        }
      }
`;

export const CircleSpinner = styled.div`
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid ${props => props.theme.backgroundColour};
  border-right: 1.1em solid ${props => props.theme.backgroundColour};
  border-bottom: 1.1em solid ${props => props.theme.backgroundColour};
  border-left: 1.1em solid ${props => props.theme.primaryColour};
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  
  :after {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }


  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`
