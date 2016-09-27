#!/bin/bash
set -ev
if [ -v SONAR_TOKEN ]; then
  docker pull pierrevincent/sonar-runner
  SONAR_OPTIONS="-Dsonar.login=$SONAR_TOKEN"
  if [ "${TRAVIS_PULL_REQUEST}" != "false" ]; then
    SONAR_OPTIONS="$SONAR_OPTIONS -Dsonar.github.oauth=$SONAR_GITHUB -Dsonar.github.pullRequest=$TRAVIS_PULL_REQUEST -Dsonar.analysis.mode=issues"
  fi
  docker run --rm -v $(pwd):/data pierrevincent/sonar-runner $SONAR_OPTIONS
fi