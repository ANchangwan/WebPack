# WebPack
### webpack.config.js
webpack을 설정하기 위한 파일 생성

오래된 자바스크립트 코드만 이해할 수 있음

import from (x)

const xx = require("xx");

모든 파일들에는 entry가 필요하고, output이 필요하다

### mode
webpack에게 지금 개발 중인지 아닌지 알려준다. 만약 production 모드일 경우 코드를 압축시켜 준다.
그렇게 되면 개발 중에 발생한 오류를 수정할 때 파악하기 힘들다.
개발 중일 때는 development를 설정해줘야한다.

### Entry 

우리가 처리하고자 하는 파일들, 내가 작성한 코드들

### output
결과물을 위해서 파일명을 설정

### path
파일을 어디에 저장할 절대 경로 지정

#### __dirname
절대 경로란 말그대로 폴더에 절대적인 위치를 말한다. 현재폴더를 기준이 아니라 전체 경로를 말한다.
전체를 경로를 설정하기 위해서 __dirname을 사용하면 편하게 경로를 가져 올 수 있다.

#### path.resolve()

const path = require("path");
path.resolve는 내가 입력한 파트들을 모아서 경로로 만들어 준다.

### rules
각각의 파일 종류에 따라 어떤 전환을 할건지 결정한다.
rules는 array 타입이다
#### 사용법
module: {
    rules: [
        {
            test: /\
            use:{
                loader:
                options:
            }
        }
    ]
}

test라는 파일을 loader로 가공한다. webpack은 node_modules에서 babel-loader를 찾는다.
몇가지 옵션을 전달한다.
