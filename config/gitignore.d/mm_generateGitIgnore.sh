#!/bin/sh

echo "RUN /Users/si/bin/addGitIgnore.sh"

#
#    Re-generate .gitignore files from core ones.  Makes updates easier.
#
#    NOTE: local-project.gitignore should always come last.
#
myname=$(basename $0)

#
#    Pretend to run from where this script is.
#
cd $(dirname $0)


#
#    In case it does not exist...
#
touch local-project.gitignore
mkdir -p Global

set -x

ignoreFiles="Global/JetBrains.gitignore Go.gitignore Dart.gitignore Node.gitignore Kotlin.gitignore Java.gitignore"

for i in ${ignoreFiles}
do
    addGitIgnore.sh "$i" | tail -1 | grep "${i}" | while read f
    do
	\cp -f "${f}" "${i}"
    done
done

cat ${ignoreFiles} \
    local-project.gitignore > ../../.gitignore

#
#    We're done!
#
exit 0
