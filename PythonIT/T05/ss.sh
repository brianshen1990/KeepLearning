apt-get install puppet
apt-get install puppet-master
puppet apply -v xxx.pp

apt-get install puppet-module-puppetlab-apache
# /usr/share/puppet/modules.available/puppetlabs-apache/

# server
sudo puppet config --section master set autosign true
# agent
sudo puppet config set server xxxxx
# agent get and apply
sudo puppet agent -v --test
systemctl enable puppet 
systemctl start puppet
ssytemctl status puppet

