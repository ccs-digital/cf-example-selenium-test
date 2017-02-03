#!/bin/bash
# Move to the Protractor test project folder
cd $HOME

export DISPLAY=:0
Xvfb :0 -screen 0 1024x768x24 &

echo "Running Protractor tests"
protractor $TESTCONF --suite $SUITE
a=$?
echo "Protractor tests have done"
exit $a