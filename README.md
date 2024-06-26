## 모노레포 react+vite+turbo 생성

모노레포를 Turborepo를 사용하여 TypeScript 없이 React와 Vite로 세팅된 프로젝트 두 개를 만드는 방법을 설명해 드리겠습니다. 단계별로 진행하겠습니다:

1. 새 디렉토리 생성 및 초기화:

```bash
mkdir my-monorepo
cd my-monorepo
npm init -y
```

2. Turborepo 설치:

```bash
npm install turbo -D
```

3. 루트 `package.json` 파일 수정:

```json
{
  "name": "my-monorepo",
  "version": "1.0.0",
  "private": true,
  "workspaces": ["apps/*"],
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build"
  },
  "devDependencies": {
    "turbo": "^1.x.x"
  }
}
```

4. `turbo.json` 파일 생성:

```json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "outputs": ["dist/**"]
    },
    "dev": {
      "cache": false
    }
  }
}
```

5. 두 개의 Vite + React 프로젝트 생성:

```bash
mkdir -p apps/project1
mkdir -p apps/project2
cd apps/project1
npm init vite@latest . -- --template react
cd ../project2
npm init vite@latest . -- --template react
cd ../..
```

6. 각 프로젝트의 `package.json` 파일에서 `"private": true`를 추가하고 이름을 변경합니다:

project1/package.json:

```json
{
  "name": "project1",
  "private": true
  // ...나머지 내용
}
```

project2/package.json:

```json
{
  "name": "project2",
  "private": true
  // ...나머지 내용
}
```

7. 루트 디렉토리에서 의존성 설치:

```bash
npm install
```

이제 모노레포가 설정되었습니다. 다음 명령어로 프로젝트를 실행할 수 있습니다:

- 개발 모드로 모든 프로젝트 실행: `npm run dev`
- 모든 프로젝트 빌드: `npm run build`

각 프로젝트는 독립적으로 실행할 수도 있습니다:

```bash
npm run dev --workspace=project1
npm run dev --workspace=project2
```

이 설정에서는 TypeScript를 사용하지 않았지만, 필요하다면 나중에 쉽게 추가할 수 있습니다.

추가 설명이나 다른 부분에 대해 더 자세히 알고 싶으신 점이 있으면 말씀해 주세요.
