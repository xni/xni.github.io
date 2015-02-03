#!/usr/bin/env python
# Script for generating README.md file

import os
import subprocess
import urllib


with open('README.md', 'w') as readme_file:
    readme_file.write('Notes\n-----\n')
    for filename in sorted(f for f in os.listdir('.') if os.path.isfile(f)):
        readme_file.write('* [{0}]({1})\n'.format(filename, urllib.quote_plus(filename)))

subprocess.check_call(['/bin/sh', '-c', 'markdown README.md > index.html'])
subprocess.check_call(['git', 'add', '-A', '.'])
subprocess.check_call(['git', 'commit', '-m', 'Articles are updated'])
